"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "./deck.css";

const PDFDownloadButton = dynamic(() => import("./PDFDownloadButton"), { ssr: false });

const summitContact = {
  phone: "800-242-6648",
  email: "Sales@SummitDrilling.com",
  web: "SummitDrilling.com",
};

const coverOptions = [
  { url: "/images/services/drilling/air-rotary-banner.webp", label: "A — Dust & Plume" },
  { url: "/images/drilling/sonic.webp", label: "B — Sonic Crew" },
  { url: "/images/projects/charlotte-airport-banner.webp", label: "C — Airport Project" },
  { url: "/images/health-safety-banner.webp", label: "D — Field Team" },
];

function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`brand-lockup ${inverse ? "inverse" : ""}`}>
      <img src={inverse ? "/images/summit-logo-update.webp" : "/images/summit-logo-scrolled.webp"} alt="Summit Drilling" />
      <span>Statement of Qualifications</span>
    </div>
  );
}

function MtnFooter({ label, inverse = false }: { label: string; inverse?: boolean }) {
  return (
    <footer className="mtn-footer">
      <img src="/images/summit-logo-update.webp" alt="Summit Drilling" />
      <span>{label}</span>
    </footer>
  );
}

type PageProps = {
  footerLabel: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "light" | "blue" | "photo";
  backgroundImage?: string;
  className?: string;
};

function Page({ footerLabel, eyebrow, title, intro, children, tone = "light", backgroundImage, className = "" }: PageProps) {
  const inverse = tone !== "light";
  return (
    <section
      className={`soq-page tone-${tone} ${className}`}
      style={backgroundImage ? { backgroundImage: `linear-gradient(135deg, rgba(0,34,91,.94), rgba(0,48,135,.78)), url(${backgroundImage})` } : undefined}
    >
      <BrandLockup inverse={inverse} />
      <header className="page-heading">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {intro && <p className="page-intro">{intro}</p>}
      </header>
      <div className="page-body">{children}</div>
      <MtnFooter label={footerLabel} inverse={inverse} />
    </section>
  );
}

function PhotoCard({ image, title, text, tall = false }: { image: string; title: string; text: string; tall?: boolean }) {
  return (
    <article className={`photo-card ${tall ? "tall" : ""}`}>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function CapabilityList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 | 3 }) {
  return (
    <ul className={`capability-list columns-${columns}`}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return <blockquote className="brand-quote">{children}</blockquote>;
}

export default function Deck5Page() {
  const [activeCover, setActiveCover] = useState(0);
  const coverPhotoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (coverPhotoRef.current) {
      coverPhotoRef.current.style.backgroundImage = `url('${coverOptions[activeCover].url}')`;
    }
  }, [activeCover]);

  return (
    <>
      {/* Cover Switcher */}
      <div className="cover-switcher">
        <span className="cov-lbl">Cover image</span>
        {coverOptions.map((opt, i) => (
          <button
            key={opt.url}
            className={`cov-btn ${i === activeCover ? "active" : ""}`}
            onClick={() => setActiveCover(i)}
          >
            <div className="cov-thumb" style={{ backgroundImage: `url('${opt.url}')` }} />
            {opt.label}
          </button>
        ))}
      </div>

      <main className="deck5-root" id="deck-root">
        <div style={{ display: 'none' }}><PDFDownloadButton /></div>

        {/* ===== 01 COVER ===== */}
        <section className="soq-page cover-page">
          <div className="cover-photo" ref={coverPhotoRef} style={{ backgroundImage: `url('${coverOptions[0].url}')`, backgroundPosition: "18% center" }} />
          <div className="cover-overlay" />
          <div className="cover-top">
            <img src="/images/summit-logo-update.webp" alt="Summit Drilling" />
            <p>Environmental &amp; Geotechnical Services</p>
          </div>
          <div className="cover-copy">
            <p className="eyebrow">Capabilities · Experience · Reach</p>
            <h1 style={{ width: "725px", fontSize: "56.33px", fontWeight: 700, lineHeight: "51.84px" }}>Statement of Qualifications</h1>
            <div className="cover-rule" />
            <p className="cover-subtitle">A unified platform for subsurface investigation, drilling and remediation.</p>
            <p className="pds-line">Featuring PDS <span>(A Summit Drilling company)</span></p>
          </div>
          <div className="cover-contact">
            <span>{summitContact.web}</span><span>{summitContact.phone}</span>
          </div>
        </section>

        {/* ===== 02 CONTENTS ===== */}
        <Page footerLabel="Contents / 02" eyebrow="Document Guide" title="Contents" intro="A concise view of the people, capabilities and field resources behind every Summit project.">
          <div style={{ height: "727px" }}>
            <div className="toc-grid">
              {[
                ["03", "One Company, Expanded Reach"],
                ["04", "Who We Are"],
                ["05", "Where We Work"],
                ["06", "Integrated Capabilities"],
                ["07", "Environmental & Geotechnical Drilling"],
                ["08", "Sonic Drilling"],
                ["09", "Direct Push (DPT)"],
                ["10", "Hollow Stem Auger"],
                ["11", "Air & Mud Rotary"],
                ["12", "Rock Coring"],
                ["13", "Remediation & Injection"],
                ["14", "Construction & Vacuum Excavation"],
                ["15", "Geophysics & Utility Locating"],
                ["16", "PFAS Experience"],
                ["17", "Fleet & Operational Capacity"],
                ["18", "Health, Safety & Quality"],
                ["19", "Licenses & Industries"],
                ["20", "Representative Experience"],
                ["21", "Let's Get to Work"],
              ].map(([num, label]) => (
                <div className="toc-row" key={num}><span>{num}</span><strong>{label}</strong></div>
              ))}
            </div>
            <div className="toc-photo" style={{ height: "244px" }}>
              <img src="/images/remediation/hero-banner.webp" alt="Summit field team" />
            </div>
          </div>
        </Page>

        {/* ===== 03 ONE COMPANY ===== */}
        <Page footerLabel="One Company / 03" eyebrow="Summit + PDS (A Summit Drilling company)" title="One Company. Expanded Reach." tone="photo" backgroundImage="/images/news/summit-pds-acquisition.webp">
          <div className="statement-panel">
            <p>Summit Drilling's acquisition of PDS <strong>(A Summit Drilling company)</strong> brings together two organizations built around safety, technical performance and responsive service.</p>
            <p>The combined platform adds geographic density across the Southeast and Gulf Coast, expands sonic drilling and remediation capacity, and gives consultants and engineers one coordinated field partner for complex, multi-location programs.</p>
          </div>
          <div className="three-up inverse-cards">
            <article><span>01</span><h3>More Regional Coverage</h3><p>Stronger field presence from the Mid-Atlantic through Florida and the Gulf Coast.</p></article>
            <article><span>02</span><h3>More Project Capacity</h3><p>Teams and equipment positioned to support concurrent and schedule-sensitive work.</p></article>
            <article><span>03</span><h3>One Safety Culture</h3><p>Aligned expectations for planning, training, communication and field execution.</p></article>
          </div>
        </Page>

        {/* ===== 04 WHO WE ARE ===== */}
        <Page footerLabel="Who We Are / 04" eyebrow="Our Purpose" title="Built to Support Environmental Professionals" intro="We help consultants and engineers obtain reliable subsurface information and execute effective cleanup strategies.">
          <div className="split-feature">
            <div>
              <Quote>An exceptional experience—grounded in safety, responsiveness, technical excellence and genuine care.</Quote>
              <p className="body-copy">Summit combines experienced field leadership, specialized equipment and a service mindset that keeps projects moving. We listen carefully, communicate clearly and take ownership of the details that influence safety, schedule and data quality.</p>
            </div>
            <img src="/images/about/summit-history.webp" alt="Summit team and equipment" />
          </div>
          <div className="value-strip" style={{ height: "95px", marginTop: "58.64px" }}>
            <div><b>Safety</b><span>Protect people, property and the environment.</span></div>
            <div><b>Ownership</b><span>Follow through and solve problems.</span></div>
            <div><b>Partnership</b><span>Work as an extension of the client team.</span></div>
            <div><b>Excellence</b><span>Deliver dependable work, every time.</span></div>
          </div>
        </Page>

        {/* ===== 05 WHERE WE WORK ===== */}
        <Page footerLabel="Where We Work / 05" eyebrow="Multi-Regional Service" title="Local Knowledge. Connected Resources." intro="A growing network of field teams supports programs from the Northeast through the Southeast and Gulf Coast.">
          <div className="map-panel">
            <img src="/images/about/us_map_locations.png" alt="Summit Drilling service locations" />
            <div className="map-copy">
              <h3>One coordinated field partner</h3>
              <p>Summit's multi-regional network supports consistent planning and execution across portfolios, while local teams bring practical familiarity with site conditions, regulations and mobilization requirements.</p>
              <h4>PDS (A Summit Drilling company)</h4>
              <p>Florida-based operations extend service throughout Florida, Georgia, Alabama, Mississippi, Louisiana and South Carolina.</p>
            </div>
          </div>
          <CapabilityList columns={3} items={["Northeast", "Mid-Atlantic", "Carolinas", "Florida", "Southeast", "Gulf Coast"]} />
        </Page>

        {/* ===== 06 INTEGRATED CAPABILITIES ===== */}
        <Page footerLabel="Integrated Capabilities / 06" eyebrow="Project Lifecycle" title="Integrated Capabilities" intro="A connected suite of field services reduces handoffs, simplifies coordination and supports projects from investigation through site closure.">
          <div className="process-line">
            {[
              ["01", "See", "Geophysics and utility locating"],
              ["02", "Investigate", "Environmental and geotechnical drilling"],
              ["03", "Characterize", "Sampling, logging and subsurface data"],
              ["04", "Treat", "Injection, remediation and construction"],
              ["05", "Support", "Systems, O&M and closure activities"],
            ].map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="wide-photo"><img src="/images/drilling/hero-banner.webp" alt="Environmental drilling operation" /></div>
          <Quote>One accountable contractor. Broader scope. Clearer communication.</Quote>
        </Page>

        {/* ===== 07 ENV & GEOTECH DRILLING ===== */}
        <Page footerLabel="Environmental Drilling / 07" eyebrow="Core Capability" title="Environmental & Geotechnical Drilling" intro="Field-proven methods selected around lithology, access, sampling objectives and final data needs.">
          <div className="photo-grid two">
            <PhotoCard image="/images/drilling/air-rotary.webp" title="Environmental Investigation" text="Soil and groundwater sampling, monitoring wells, nested and multi-cased installations, vapor points and remedial infrastructure." />
            <PhotoCard image="/images/drilling/auger.webp" title="Geotechnical Exploration" text="SPT sampling, rock coring, instrumentation support and subsurface exploration for civil and infrastructure design." />
          </div>
          <CapabilityList items={["Monitoring and recovery wells", "Continuous and discrete sampling", "Rock coring and SPT", "Low-clearance and limited-access work", "Angled drilling", "Well abandonment and decommissioning", "Dewatering points", "Instrumentation installation"]} />
          <div className="callout"><b>Method-neutral planning</b><span>We match the drilling platform and tooling to the site—not the other way around.</span></div>
        </Page>

        {/* ===== 08 SONIC ===== */}
        <Page footerLabel="Sonic Drilling / 08" eyebrow="Specialized Drilling" title="Sonic Drilling" tone="blue">
          <div className="blue-feature">
            <div>
              <p className="large-copy">Sonic technology advances casing with high-frequency energy, enabling fast, high-quality sampling across difficult formations while limiting investigation-derived waste.</p>
              <CapabilityList columns={1} items={["Continuous core recovery", "Deep and multi-cased wells", "Environmental and geotechnical sampling", "Sensitive formation isolation", "Remedial point installation", "Mining, water-resource and infrastructure exploration"]} />
            </div>
            <img src="/images/drilling/sonic.webp" alt="Sonic drilling rig" />
          </div>
          <div className="bottom-note"><strong>Expanded sonic leadership</strong><p>PDS (A Summit Drilling company) adds deep regional experience and greater deployment flexibility for complex projects across the Southeast.</p></div>
        </Page>

        {/* ===== 09 DIRECT PUSH ===== */}
        <Page footerLabel="Direct Push / 09" eyebrow="Drilling Methods · 01 / 04" title="Direct Push (DPT)" intro="Truck-mounted and all-terrain probes collect high-quality soil, groundwater and vapor samples with minimal site impact.">
          <div className="split-feature" style={{ gridTemplateColumns: "1fr 3.4in" }}>
            <div>
              <p className="body-copy">Direct push probes collect soil, groundwater and vapor samples with minimal impact to the site. Summit's fleet manages difficult site access and the most diverse subsurface conditions.</p>
              <p className="body-copy" style={{ marginTop: ".16in" }}>Many of our rigs convert to hollow-stem augers for well installation where needed. Compared with conventional drilling, direct push is less labor-intensive, sets up faster, generates fewer cuttings, and is easier to decontaminate and maintain.</p>
              <h3 style={{ marginTop: ".24in" }}>Ideal for</h3>
              <CapabilityList columns={1} items={["Soil, groundwater & vapor sampling", "Microwells and temporary wells", "Direct injection points", "Limited-access and all-terrain sites", "Quick-turnaround investigations"]} />
            </div>
            <img src="/images/services/drilling/dpt-banner.webp" alt="Summit direct push drilling rig" style={{ height: "4.8in" }} />
          </div>
          <div className="callout"><b>Less waste, faster setup</b><span>Direct push reduces investigation-derived waste and keeps mobilization light.</span></div>
        </Page>

        {/* ===== 10 HOLLOW STEM AUGER ===== */}
        <Page footerLabel="Hollow Stem Auger / 10" eyebrow="Drilling Methods · 02 / 04" title="Hollow Stem Auger" intro="The ideal method for advancing shallow boreholes in unconsolidated formations — especially when soil sampling is required.">
          <div className="split-feature reverse" style={{ gridTemplateColumns: "3.4in 1fr" }}>
            <img src="/images/services/drilling/hsa-banner.webp" alt="Summit hollow stem auger drilling" style={{ height: "4.8in" }} />
            <div>
              <p className="body-copy">A pilot bit drills the center of the hole while the drill rod turns in tandem with the augers. This lets crews perform split-spoon, Shelby tube, Dennison and Hydropunch sampling — and even rock coring — while the augers stay in place.</p>
              <p className="body-copy" style={{ marginTop: ".16in" }}>On completion, the monitoring screen and casing are inserted and grouted to prevent contamination from the top of the hole. In soft formations, a tapered wooden plug can replace drill rod and is knocked out at depth.</p>
              <h3 style={{ marginTop: ".24in" }}>Ideal for</h3>
              <CapabilityList columns={1} items={["Split-spoon & Shelby tube sampling", "Conventional monitoring-well installation", "Stable boreholes in soils", "Discrete groundwater sampling", "Shallow unconsolidated formations"]} />
            </div>
          </div>
          <div className="callout"><b>Sample without losing the hole</b><span>Augers stay in place while sampling and coring proceed.</span></div>
        </Page>

        {/* ===== 11 AIR & MUD ROTARY ===== */}
        <Page footerLabel="Air & Mud Rotary / 11" eyebrow="Drilling Methods · 03 / 04" title="Air & Mud Rotary" intro="The efficient choice for advancing boreholes in consolidated bedrock formations.">
          <div className="split-feature" style={{ gridTemplateColumns: "1fr 3.4in" }}>
            <div>
              <p className="body-copy">High-flow air injected through the drill string cools the bit, evacuates cuttings and stabilizes the borehole. Constant cleaning keeps the bit in consistent contact with intact bedrock — far more efficient than cable-tool methods.</p>
              <p className="body-copy" style={{ marginTop: ".16in" }}>Compressor and borehole size set the achievable depth, maintaining roughly 3,000 ft/min uphole velocity to clear cuttings; foam can be added to lift cuttings in difficult formations. Mud rotary supports larger-diameter installations in overburden.</p>
              <h3 style={{ marginTop: ".24in" }}>Ideal for</h3>
              <CapabilityList columns={1} items={["Consolidated bedrock drilling", "Deep & large-diameter boreholes", "Bedrock monitoring & recovery wells", "Surface casing installation", "Open-hole injection wells"]} />
            </div>
            <img src="/images/services/drilling/air-rotary-banner.webp" alt="Summit air rotary drilling" style={{ height: "4.8in" }} />
          </div>
          <div className="callout"><b>Built for bedrock</b><span>Efficient cuttings removal keeps the bit cutting at depth.</span></div>
        </Page>

        {/* ===== 12 ROCK CORING ===== */}
        <Page footerLabel="Rock Coring / 12" eyebrow="Drilling Methods · 04 / 04" title="Rock Coring" intro="High-quality core recovery for geotechnical and environmental characterization of bedrock.">
          <div className="split-feature reverse" style={{ gridTemplateColumns: "3.4in 1fr" }}>
            <img src="/images/projects/charlestown-banner.webp" alt="Summit rock coring program" style={{ height: "4.8in" }} />
            <div>
              <p className="body-copy">Summit recovers continuous rock core in standard sizes — BQ, NQ, HQ and PQ — for lithologic logging, RQD and fracture analysis, and integrates coring with sonic and rotary programs.</p>
              <p className="body-copy" style={{ marginTop: ".16in" }}>On a recent U.S. Army Corps of Engineers program, crews cored inside casing strings to depths of up to 150 feet across highly variable subsurface conditions, delivering high-quality geological data with no schedule delays.</p>
              <h3 style={{ marginTop: ".24in" }}>Ideal for</h3>
              <CapabilityList columns={1} items={["BQ, NQ, HQ & PQ core sizes", "Continuous core recovery", "RQD & fracture logging support", "Coring inside casing strings", "Deep bedrock characterization"]} />
            </div>
          </div>
          <div className="callout"><b>Data you can defend</b><span>Continuous, high-recovery core for confident interpretation.</span></div>
        </Page>

        {/* ===== 13 REMEDIATION ===== */}
        <Page footerLabel="Remediation & Injection / 13" eyebrow="From Design to Field Execution" title="Remediation & Injection Services" intro="Experienced crews translate remedial designs into safe, repeatable field programs with disciplined documentation.">
          <div className="photo-grid two">
            <PhotoCard image="/images/remediation/injection.webp" title="In-Situ Injection" text="Direct-push and fixed-point delivery, reagent mixing, batch management and controlled placement for soil and groundwater treatment." />
            <PhotoCard image="/images/remediation/systems-installation.webp" title="Remediation Systems" text="Mechanical installation, trenching, conveyance piping, equipment setting, startup support, O&M and decommissioning." />
          </div>
          <CapabilityList items={["Chemical oxidation and reduction", "Bioremediation amendments", "Permeable reactive barriers", "Soil vapor extraction and air sparge", "Multi-phase extraction support", "Treatment system installation", "O&M and system optimization", "Closure and decommissioning"]} />
        </Page>

        {/* ===== 14 CONSTRUCTION ===== */}
        <Page footerLabel="Construction & Excavation / 14" eyebrow="Field Implementation" title="Environmental Construction & Vacuum Excavation" intro="Practical construction capability keeps environmental designs moving from paper to completion.">
          <div className="split-feature reverse">
            <img src="/images/remediation/earthwork.webp" alt="Environmental construction" />
            <div>
              <h3>Construction services</h3>
              <CapabilityList columns={1} items={["Soil excavation and source removal", "UST removal and closure support", "Treatment system installation", "Demolition and decommissioning", "Site clearing, grading and restoration", "Stormwater and subsurface piping"]} />
              <h3 style={{ marginTop: ".22in" }}>Soft-dig / vacuum excavation</h3>
              <p className="body-copy">Positive utility exposure, borehole pre-clearance and precise excavation around sensitive infrastructure reduce uncertainty before intrusive work begins.</p>
            </div>
          </div>
          <div className="callout"><b>Regional construction capability</b><span>PDS (A Summit Drilling company) brings established Florida remediation construction and vacuum excavation experience.</span></div>
        </Page>

        {/* ===== 15 GEOPHYSICS ===== */}
        <Page footerLabel="Geophysics & Utility Locating / 15" eyebrow="See Before You Drill" title="Geophysics & Utility Locating" intro="Multiple technologies are combined to improve subsurface understanding, reduce utility risk and guide focused investigation.">
          <div className="geo-layout">
            <img src="/images/geophysics/utility-locating-banner.webp" alt="Utility locating and geophysical survey" />
            <div className="tech-cards">
              {[
                ["Utility Locating", "GPR, electromagnetic methods and documentation for pre-clearance."],
                ["Borehole Geophysics", "Downhole logging and stratigraphic profiling."],
                ["Electrical Resistivity", "Imaging of geologic and environmental contrasts."],
                ["Seismic Refraction", "Depth-to-bedrock and subsurface velocity interpretation."],
                ["UST / Septic Detection", "Targeted non-destructive investigation before excavation."],
              ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </Page>

        {/* ===== 16 PFAS ===== */}
        <Page footerLabel="PFAS Experience / 16" eyebrow="Emerging Contaminants" title="PFAS Experience" tone="photo" backgroundImage="/images/projects/charlotte-airport-banner.webp">
          <div className="statement-panel narrow">
            <p>PFAS investigations demand disciplined material control, careful sampling practices and consistent documentation. Summit teams support work at airports, military facilities, industrial properties, fire-training areas and public-sector sites.</p>
          </div>
          <div className="pfas-grid">
            {[
              ["Plan", "Project-specific procedures, material screening and crew briefings."],
              ["Prevent", "Dedicated tooling and controls designed to reduce cross-contamination risk."],
              ["Sample", "Soil, groundwater and monitoring-well programs aligned with consultant protocols."],
              ["Document", "Traceable field records, decontamination logs and clear communication."],
            ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <p className="inverse-note">PDS (A Summit Drilling company) contributes extensive Florida and Southeast PFAS drilling experience.</p>
        </Page>

        {/* ===== 17 FLEET ===== */}
        <Page footerLabel="Fleet & Operational Capacity / 17" eyebrow="Ready for the Field" title="Fleet & Operational Capacity" intro="A diverse equipment platform supports the formation, access constraints and production requirements of each assignment—without turning capability into a vanity counter.">
          <div className="equipment-grid">
            {[
              ["Sonic", "/images/drilling/sonic.webp"],
              ["Direct Push", "/images/drilling/direct-push.webp"],
              ["Auger & Rotary", "/images/drilling/auger.webp"],
              ["Injection", "/images/remediation/injection.webp"],
              ["Geophysics", "/images/geophysics/utility-locating.webp"],
              ["Construction", "/images/remediation/earthwork.webp"],
            ].map(([title, image]) => <article key={title}><img src={image} alt="" /><h3>{title}</h3></article>)}
          </div>
          <div className="operational-strip">
            <div><b>Deployment</b><span>Regional staging and coordinated scheduling.</span></div>
            <div><b>Maintenance</b><span>Dedicated fleet support and inspection practices.</span></div>
            <div><b>Adaptability</b><span>Low-clearance, limited-access and specialty configurations.</span></div>
          </div>
        </Page>

        {/* ===== 18 HEALTH SAFETY ===== */}
        <Page footerLabel="Health, Safety & Quality / 18" eyebrow="Our First Priority" title="Health, Safety & Quality" intro="Safety is a working system—visible in planning, training, equipment care, field leadership and daily decisions.">
          <div className="safety-hero">
            <img src="/images/health-safety-banner.webp" alt="Summit health and safety team" />
            <Quote>Every employee has a role in protecting coworkers, clients, communities and the environment.</Quote>
          </div>
          <div className="safety-columns">
            <div><h3>Training</h3><p>OSHA coursework, task-specific qualifications, equipment training and refresher programs.</p></div>
            <div><h3>Planning</h3><p>Site-specific plans, pre-task reviews, utility clearance and customer requirement alignment.</p></div>
            <div><h3>Field Leadership</h3><p>Hands-on mentoring, observations, audits and open communication around changing conditions.</p></div>
            <div><h3>Quality</h3><p>Clear procedures, documented work and disciplined execution that protects the integrity of results.</p></div>
          </div>
        </Page>

        {/* ===== 19 LICENSES ===== */}
        <Page footerLabel="Licenses & Industries / 19" eyebrow="Qualified for Complex Work" title="Licenses & Industries Served" intro="Regional credentials and sector experience support work in regulated, sensitive and operationally demanding environments.">
          <div className="license-layout">
            <div>
              <h3>Licensing &amp; qualifications</h3>
              <CapabilityList columns={1} items={["Water-well contractor licensing across multiple states", "Florida pollutant storage systems specialty contractor", "Florida certified building contractor", "Professional geologist credentials", "OSHA-trained field personnel", "Railroad, terminal and MSHA-trained personnel as required"]} />
              <p className="fine-print">Current project-specific licenses, insurance and safety documentation are available during qualification and contracting.</p>
            </div>
            <div>
              <h3>Industries</h3>
              <div className="industry-tags">
                {["Environmental Consulting", "Engineering", "Industrial", "Energy", "Transportation", "Airports", "Government", "Military", "Petroleum", "Utilities", "Mining", "Landfills", "Commercial Development", "Water Resources"].map(x => <span key={x}>{x}</span>)}
              </div>
            </div>
          </div>
          <div className="bottom-note light-note"><strong>Built for consultant-led work</strong><p>We understand the importance of data quality, defensible documentation, schedule visibility and representing the project team professionally in the field.</p></div>
        </Page>

        {/* ===== 20 PROJECTS ===== */}
        <Page footerLabel="Representative Experience / 20" eyebrow="Representative Experience" title="Complex Sites. Practical Execution." intro="A few examples of the environments and project conditions Summit teams are equipped to manage.">
          <div className="projects-grid">
            <PhotoCard tall image="/images/projects/charlotte-airport-banner.webp" title="Active-Airport Containment" text="Constructed a bentonite hydraulic cut-off wall beside active aviation infrastructure while coordinating security, utilities, impacted soil and regulatory requirements." />
            <PhotoCard tall image="/images/projects/spartanburg-sonic-banner.webp" title="Coastal & Difficult-Access Drilling" text="Specialty access planning and adaptable drilling platforms support characterization where conventional mobilization is not possible." />
            <PhotoCard tall image="/images/projects/linden-banner.webp" title="Integrated Investigation & Remediation" text="Geophysics, drilling and remediation resources can be sequenced under one field-services platform to reduce handoffs and maintain momentum." />
          </div>
          <div className="callout"><b>More than a list of projects</b><span>Our value is how we plan, communicate and perform when conditions are complex.</span></div>
        </Page>

        {/* ===== 21 CLOSING ===== */}
        <section className="soq-page closing-page">
          <BrandLockup inverse />
          <header className="page-heading">
            <p className="eyebrow">Start a Project</p>
            <h2>Let's Get to Work.</h2>
          </header>
          <div className="closing-banner">
            <img src="/images/contact/hero-banner.webp" alt="The Summit Drilling team" />
          </div>
          <div className="closing-copy">
            <div className="closing-lead">
              <p>Bring us your scope, schedule and site constraints. Our team will help identify the right field approach and provide a clear, competitive proposal.</p>
              <p className="closing-pds">PDS <strong>(A Summit Drilling company)</strong></p>
            </div>
            <div className="contact-card">
              <div><span className="lbl">Email</span><span className="val">{summitContact.email}</span></div>
              <div><span className="lbl">Phone</span><span className="val">{summitContact.phone}</span></div>
              <div><span className="lbl">Web</span><span className="val">{summitContact.web}</span></div>
            </div>
          </div>
          <MtnFooter label="Let's Get to Work / 21" inverse />
        </section>
      </main>
    </>
  );
}
