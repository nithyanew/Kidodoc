# Product Vision and Problem Statement
## Vision
KidoDoc is a privacy-first pediatric health assistant for parents to:
- Register parents + partner, add 1–4 children, and capture full family history (maternal/paternal sides + siblings).
- Upload and organize medical documents (blood reports, scans, prescriptions, DNA/genetic, pregnancy reports, BMI/growth).
- Generate AI health insights + preventive recommendations (risk alerts, vaccination due, growth milestones, screening suggestions).
- Provide explainable, actionable next steps (what tests are needed if reports missing, schedule reminders, "learn more", consult pediatrician).
- Enable secure sharing with family/clinicians and future integration via MCP.

## Key outcomes
- Parents can complete onboarding + add child + upload reports in < 10 minutes.
- Family history is structured and reusable for risk assessment.
- AI insights are explainable, safe, and auditable.
- Documents are searchable, categorized, and versioned.

# Personas, roles, permissions
- **Parent**: Primary Account Owner. Full access.
- **Partner**: Secondary Account. Same as Parent but cannot delete family group.
- **Family Member**: Invite-only. View-only or limited contributor.
- **Clinician**: Invite-only. View medical summary, download reports, add notes.
- **Admin**: Platform Admin. User support, audit tools.

# Functional Requirements
1. **Authentication & onboarding**: Gmail OAuth, Phone OTP. Create Family Group. Limits on children.
2. **Child profile management**: Manage child timeline (growth, vaccines, visits).
3. **Family history module**: Maternal/Paternal/Siblings tracking diseases and generating risk factors and preventive recommendations.
4. **Medical records module**: Document upload, auto-classification, OCR/Extraction, versioning, search/tagging.
5. **AI Insights dashboard**: Vaccination, Growth, Family risk, Lifestyle recommendations with explainability.
6. **Scheduling & reminders**: Reminders for vaccines, screenings, follow-up.
7. **Sharing & exports**: PDF summary, shareable links, audit trail.
8. **Integrations + MCP**: Integration with email, MCP Server for LLM query interface.

# Non-Functional Requirements
- **Security**: TLS 1.2+, AES-256 KMS, RBAC, Data minimization, HIPAA-grade.
- **Reliability**: 99.9% uptime, async processing, fast uploads.
- **Scalability**: Horizontal scaling for workers, vector embeddings.
- **Observability**: Structured logs, metrics.

# Initial Architecture & Dev Plan
- **Architecture**: Microservices + event-driven.
- **Services**: Identity, Family, History, Records, Doc Processing, Insights, Notifications, Sharing, AI Gateway, MCP Server.
- **Stack**: Postgres/SQL, S3/Blob, Vector DB (pgvector/pinecone), Redis.
- **AI/LLM**: RAG design with chunking, insights orchestrator agent.
- **UI**: React + TS + Tailwind/MaterialUI.
