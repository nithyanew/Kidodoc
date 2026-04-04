# Security & Compliance: KidoDoc

## 1. Threat Model & Mitigations

| Threat | Description | Mitigation Strategy |
| :--- | :--- | :--- |
| **Data Breach (DB / S3)** | Unauthorized access to raw PHI or documents at rest. | `AES-256` encryption at rest for S3/Blob and Postgres. KMS for key management. |
| **Data Interception** | Man-in-the-middle attacks stealing sessions or data in transit. | Enforce `TLS 1.2+`. HSTS enabled. Secure, HttpOnly, SameSite strict cookies. |
| **Prompt Injection** | Malicious content in uploaded documents tricking the LLM. | Guardrails in AI Gateway. Strict schema parsing for LLM output. Output validation before storing. |
| **Unauthorized Access (IDOR)** | A user accesses another family's child data or documents. | `ChildId` and `FamilyGroupId` verified against `UserId` context in EVERY endpoint (RBAC/ABAC). |
| **Account Takeover (ATO)** | Compromised credentials. | Gmail OAuth + Phone OTP. No raw passwords stored natively. |
| **Mass Export / Exfiltration** | An authorized user or compromised clinician downloads too much data. | Rate limiting per token/user. Audit logging for every document download. |

## 2. Role-Based Access Control (RBAC) Matrix

| Entity | Parent (Owner) | Partner | Family Member | Clinician | Admin |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Family Group** | Manage (Delete/Invite) | View (Invite only) | View | None | View (Support) |
| **Child Profile** | M/V/E/D | M/V/E | View (Config) | View Summary | View Metadata |
| **Documents** | Upload/View/Delete | Upload/View | View (Config) | Download (Consent) | Metadata only |
| **Insights** | Generate/View | Generate/View | View (Config) | View | None |
| **MCP/Tokens** | Manage | View | None | None | Revoke |

*M=Modify, V=View, E=Edit, D=Delete*

## 3. Audit Logging (PHI Events)
All access and modification to PHI must be logged in an immutable, append-only table (`AuditLog`).
- `Timestamp`
- `ActorUserId`
- `Action`: `DOCUMENT_READ`, `SUMMARY_EXPORT`, `INSIGHT_GENERATE`, `CHILD_UPDATE`
- `EntityType` & `EntityId`
- `Status`: `SUCCESS`, `DENIED`
- `IP Address` (hashed or masked if possible)

## 4. Data Minimization & Retention 
- **Minimization**: Do not collect complete addresses; city level is sufficient. Avoid collecting SSN or government IDs unless mandated.
- **Retention**: Soft deletion only. Mark `is_deleted = true`. Allow a 30-day recovery window, followed by hard purge batch jobs conforming to regional compliance requirements (e.g., GDPR right to be forgotten alongside HIPAA retention).

## 5. Compliance Readiness (HIPAA-grade)
- **BAA (Business Associate Agreement)**: Must be signed with cloud providers (AWS/Azure) and LLM providers.
- **Least Privilege**: Application microservices operate under distinct IAM roles with least-privilege access.
- **Disaster Recovery**: Multi-AZ deployments with nightly DB snapshots and continuous WAL archiving. S3 versioning enabled for documents.
