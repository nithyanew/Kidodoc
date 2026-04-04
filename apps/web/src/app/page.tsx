"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo">
          <i className="fa-solid fa-notes-medical"></i>
          <span>KidoDoc</span>
        </div>
        <nav className="nav-menu">
          <a
            href="#"
            className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("dashboard");
            }}
          >
            <i className="fa-solid fa-chart-pie"></i> Dashboard
          </a>
          <a
            href="#"
            className={`nav-item ${activeTab === "children" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("children");
            }}
          >
            <i className="fa-solid fa-child-reaching"></i> Children
          </a>
          <a
            href="#"
            className={`nav-item ${activeTab === "records" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("records");
            }}
          >
            <i className="fa-solid fa-file-medical"></i> Medical Records
          </a>
          <a
            href="#"
            className={`nav-item ${activeTab === "history" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("history");
            }}
          >
            <i className="fa-solid fa-people-arrows"></i> Family History
          </a>
          <a
            href="#"
            className={`nav-item ${activeTab === "insights" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("insights");
            }}
          >
            <i className="fa-solid fa-lightbulb"></i> AI Insights
          </a>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">SJ</div>
            <div className="user-info">
              <span className="user-name">Sarah Jenkins</span>
              <span className="user-role">Primary Parent</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-header">
          <div className="header-greeting">
            <h1>Good morning, Nithyasree! 👋</h1>
            <p>Here&apos;s what is happening with your family&apos;s health today.</p>
          </div>
          <div className="header-actions">
            <button
              className="btn-primary"
              id="uploadBtn"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="fa-solid fa-cloud-arrow-up"></i> Upload Document
            </button>
            <button className="btn-icon">
              <i className="fa-regular fa-bell"></i>
              <span className="badge">2</span>
            </button>
          </div>
        </header>

        <div
          id="view-dashboard"
          className={`view-section ${activeTab === "dashboard" ? "active-view" : ""}`}
        >
          <div className="dashboard-grid">
            <section className="insights-section">
              <div className="section-header">
                <h2>
                  <i className="fa-solid fa-wand-magic-sparkles"></i> High
                  Priority AI Insights
                </h2>
              </div>
              <div className="insight-cards-container">
                <div className="insight-card alert-medium glass-panel">
                  <div className="insight-icon">
                    <i className="fa-solid fa-syringe"></i>
                  </div>
                  <div className="insight-content">
                    <h3>Vaccination Due Soon</h3>
                    <p>
                      <strong>Leo (Age 2)</strong> is due for the MMR Booster
                      in 14 days.
                    </p>
                    <div className="insight-actions">
                      <button className="btn-outline-sm">Schedule</button>
                      <button className="btn-text-sm">Why this insight?</button>
                    </div>
                  </div>
                </div>

                <div className="insight-card alert-high glass-panel">
                  <div className="insight-icon">
                    <i className="fa-solid fa-heart-pulse"></i>
                  </div>
                  <div className="insight-content">
                    <h3>Family Risk Alert</h3>
                    <p>
                      Based on Maternal Grandfather&apos;s history of Type 2
                      Diabetes, early metabolic screening is recommended for{" "}
                      <strong>Emma (Age 5)</strong>.
                    </p>
                    <div className="insight-actions">
                      <button className="btn-outline-sm">Learn More</button>
                      <button className="btn-text-sm">Data used</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="children-section">
              <div className="section-header">
                <h2>Your Children</h2>
                <button
                  className="btn-text"
                  onClick={() => setActiveTab("children")}
                >
                  View All <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="children-cards">
                <div
                  className="child-card glass-panel interactive"
                  onClick={() => setActiveTab("children")}
                >
                  <div className="child-header">
                    <div className="child-avatar leo-bg">L</div>
                    <div className="child-basic-info">
                      <h3>Leo Jenkins</h3>
                      <span>Male, 2 yrs 4 mos</span>
                    </div>
                  </div>
                  <div className="child-stats">
                    <div className="stat">
                      <span className="stat-label">Height</span>
                      <span className="stat-value">88 cm</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Weight</span>
                      <span className="stat-value">12.5 kg</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">BMI</span>
                      <span className="stat-value highlight-good">Healthy</span>
                    </div>
                  </div>
                  <div className="child-footer">
                    <span className="last-updated">Last update: 2 weeks ago</span>
                  </div>
                </div>

                <div
                  className="child-card glass-panel interactive"
                  onClick={() => setActiveTab("children")}
                >
                  <div className="child-header">
                    <div className="child-avatar emma-bg">E</div>
                    <div className="child-basic-info">
                      <h3>Emma Jenkins</h3>
                      <span>Female, 5 yrs 1 mo</span>
                    </div>
                  </div>
                  <div className="child-stats">
                    <div className="stat">
                      <span className="stat-label">Height</span>
                      <span className="stat-value">110 cm</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Weight</span>
                      <span className="stat-value">18.2 kg</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">BMI</span>
                      <span className="stat-value highlight-good">Healthy</span>
                    </div>
                  </div>
                  <div className="child-footer">
                    <span className="last-updated">Last update: 1 month ago</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          id="view-children"
          className={`view-section ${activeTab === "children" ? "active-view" : ""}`}
        >
          <div className="section-header">
            <h2>
              <i className="fa-solid fa-child-reaching"></i> Manage Children
              Profiles
            </h2>
            <button className="btn-primary">
              <i className="fa-solid fa-plus"></i> Add Child
            </button>
          </div>

          <div className="children-profile-grid">
            {/* Leo Profile */}
            <div className="child-profile-card glass-panel">
              <div className="profile-header">
                <div className="child-avatar leo-bg">L</div>
                <div className="profile-info">
                  <h3>Leo Jenkins</h3>
                  <p>Male, 2 yrs 4 mos</p>
                </div>
                <button className="btn-icon" title="Edit Profile">
                  <i className="fa-solid fa-pen"></i>
                </button>
              </div>

              <div className="profile-details">
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fa-solid fa-droplet"></i> Blood Group:
                  </span>
                  <span className="detail-value">A+</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    Allergies:
                  </span>
                  <span className="detail-value alert-text">Peanuts</span>
                </div>
              </div>

              <div className="profile-sections">
                <div className="profile-section">
                  <h4>
                    <i className="fa-solid fa-chart-line"></i> Growth Chart
                  </h4>
                  <div className="chart-placeholder">
                    <div className="stat-mini">
                      Height: 88 cm{" "}
                      <span className="trend up">
                        <i className="fa-solid fa-arrow-up"></i> 2cm
                      </span>
                    </div>
                    <div className="stat-mini">
                      Weight: 12.5 kg{" "}
                      <span className="trend up">
                        <i className="fa-solid fa-arrow-up"></i> 0.5kg
                      </span>
                    </div>
                    <div className="chart-bar">
                      <div
                        className="chart-progress"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="chart-note">75th percentile for age</p>
                  </div>
                </div>

                <div className="profile-section">
                  <h4>
                    <i className="fa-solid fa-syringe"></i> Vaccination Status
                  </h4>
                  <ul className="vax-list">
                    <li className="vax-item completed">
                      <i className="fa-solid fa-circle-check"></i>
                      <span>DTP Booster (Completed)</span>
                    </li>
                    <li className="vax-item upcoming">
                      <i className="fa-solid fa-clock"></i>
                      <span>MMR Booster (Due in 14 days)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Emma Profile */}
            <div className="child-profile-card glass-panel">
              <div className="profile-header">
                <div className="child-avatar emma-bg">E</div>
                <div className="profile-info">
                  <h3>Emma Jenkins</h3>
                  <p>Female, 5 yrs 1 mo</p>
                </div>
                <button className="btn-icon" title="Edit Profile">
                  <i className="fa-solid fa-pen"></i>
                </button>
              </div>

              <div className="profile-details">
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fa-solid fa-droplet"></i> Blood Group:
                  </span>
                  <span className="detail-value">O-</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    Allergies:
                  </span>
                  <span className="detail-value safe-text">None</span>
                </div>
              </div>

              <div className="profile-sections">
                <div className="profile-section">
                  <h4>
                    <i className="fa-solid fa-chart-line"></i> Growth Chart
                  </h4>
                  <div className="chart-placeholder">
                    <div className="stat-mini">
                      Height: 110 cm{" "}
                      <span className="trend up">
                        <i className="fa-solid fa-arrow-up"></i> 1cm
                      </span>
                    </div>
                    <div className="stat-mini">
                      Weight: 18.2 kg{" "}
                      <span className="trend up">
                        <i className="fa-solid fa-arrow-up"></i> 0.3kg
                      </span>
                    </div>
                    <div className="chart-bar">
                      <div
                        className="chart-progress"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <p className="chart-note">60th percentile for age</p>
                  </div>
                </div>

                <div className="profile-section">
                  <h4>
                    <i className="fa-solid fa-syringe"></i> Vaccination Status
                  </h4>
                  <ul className="vax-list">
                    <li className="vax-item completed">
                      <i className="fa-solid fa-circle-check"></i>
                      <span>Polio Booster (Completed)</span>
                    </li>
                    <li className="vax-item completed">
                      <i className="fa-solid fa-circle-check"></i>
                      <span>Flu Shot (Completed)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="view-records"
          className={`view-section ${activeTab === "records" ? "active-view" : ""}`}
        >
          <div className="section-header">
            <h2>
              <i className="fa-solid fa-file-medical"></i> Medical Records
              Vault
            </h2>
          </div>
          <div
            className="glass-panel"
            style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}
          >
            <i
              className="fa-solid fa-folder-open"
              style={{ fontSize: "48px", marginBottom: "16px", color: "var(--primary-color)" }}
            ></i>
            <h3>Document Vault</h3>
            <p>
              This page will show a searchable grid of PDFs, Blood Reports,
              Prescriptions, and Scans.
            </p>
          </div>
        </div>

        <div
          id="view-history"
          className={`view-section ${activeTab === "history" ? "active-view" : ""}`}
        >
          <div className="section-header">
            <h2>
              <i className="fa-solid fa-people-arrows"></i> Family History Tree
            </h2>
          </div>
          <div
            className="glass-panel"
            style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}
          >
            <i
              className="fa-solid fa-tree"
              style={{ fontSize: "48px", marginBottom: "16px", color: "var(--primary-color)" }}
            ></i>
            <h3>Genetic & Family History</h3>
            <p>
              This page will allow managing Maternal, Paternal, and Sibling
              medical conditions for risk scoring.
            </p>
          </div>
        </div>

        <div
          id="view-insights"
          className={`view-section ${activeTab === "insights" ? "active-view" : ""}`}
        >
          <div className="section-header">
            <h2>
              <i className="fa-solid fa-lightbulb"></i> All AI Insights
            </h2>
          </div>
          <div
            className="glass-panel"
            style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}
          >
            <i
              className="fa-solid fa-robot"
              style={{ fontSize: "48px", marginBottom: "16px", color: "var(--primary-color)" }}
            ></i>
            <h3>Full Insights Engine</h3>
            <p>
              This page will show an expanded, filterable list of all predictive
              health and growth insights.
            </p>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" id="uploadModal">
          <div className="modal-content glass-panel">
            <div className="modal-header">
              <h2>Upload Medical Record</h2>
              <button
                className="btn-close"
                id="closeModalBtn"
                onClick={() => setIsModalOpen(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="upload-dropzone" id="dropzone">
                <i className="fa-solid fa-cloud-arrow-up drop-icon"></i>
                <h3>Drag & Drop files here</h3>
                <p>or click to browse PDFs, JPGs, or PNGs</p>
                <input type="file" id="fileInput" hidden multiple />
                <button
                  className="btn-secondary"
                  onClick={() => document.getElementById("fileInput")?.click()}
                >
                  Browse Files
                </button>
              </div>
              <p className="upload-note">
                Documents are securely encrypted. Our AI will automatically
                categorize and extract key vitals.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
