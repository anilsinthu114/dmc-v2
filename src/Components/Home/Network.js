// import { WifiIcon } from "@mui/icons-material";
// import React from "react";

// // Import network-related images
// import connectivity from "../../assets/images/connectivity.jpg";
// import networkInfrastructure from "../../assets/images/network-infrastructure.jpg";
// import performance from "../../assets/images/performance.jpg";
// import security from "../../assets/images/security.jpg";

// const Network = () => {
//   const containerStyle = {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f8f9fa",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   };

//   const cardStyle = {
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     borderRadius: "20px",
//     padding: "40px",
//     boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//     color: "white",
//     textAlign: "center",
//     position: "relative",
//     overflow: "hidden",
//     margin: "20px 0",
//   };

//   const headingStyle = {
//     fontSize: "clamp(2rem, 5vw, 3.5rem)",
//     fontWeight: "700",
//     marginBottom: "30px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "15px",
//     textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//   };

//   const iconStyle = {
//     fontSize: "clamp(2.5rem, 6vw, 4rem)",
//     color: "#ffd700",
//     filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
//   };

//   const contentStyle = {
//     fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
//     lineHeight: "1.8",
//     maxWidth: "800px",
//     margin: "0 auto",
//     textAlign: "justify",
//     textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
//   };

//   const highlightStyle = {
//     backgroundColor: "rgba(255,255,255,0.2)",
//     padding: "2px 8px",
//     borderRadius: "15px",
//     fontWeight: "600",
//   };

//   const responsiveGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//     gap: "30px",
//     marginTop: "40px",
//   };

//   const featureCardStyle = {
//     background: "rgba(255,255,255,0.1)",
//     borderRadius: "15px",
//     padding: "25px",
//     backdropFilter: "blur(10px)",
//     border: "1px solid rgba(255,255,255,0.2)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "200px",
//     objectFit: "cover",
//     borderRadius: "10px",
//     marginBottom: "15px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//   };

//   const heroImageStyle = {
//     width: "100%",
//     maxWidth: "600px",
//     height: "300px",
//     objectFit: "cover",
//     borderRadius: "15px",
//     margin: "20px auto",
//     display: "block",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={cardStyle}>
//         <h2 style={headingStyle}>
//           <WifiIcon style={iconStyle} />
//           Network Infrastructure
//         </h2>
        
//         {/* Hero Image */}
//         <img 
//           src={networkInfrastructure} 
//           alt="Network Infrastructure" 
//           style={heroImageStyle}
//           loading="lazy"
//         />
        
//         <p style={contentStyle}>
//           A <span style={highlightStyle}>network</span> is a sophisticated system of interconnected devices or nodes that 
//           communicate and share resources seamlessly. It enables efficient data transmission and 
//           access to shared services such as <span style={highlightStyle}>internet connectivity</span>, 
//           <span style={highlightStyle}> file sharing</span>, and <span style={highlightStyle}>printing</span>. 
//           Networks can be categorized based on their geographic scope, from 
//           <span style={highlightStyle}> Local Area Networks (LANs)</span> confined to a small area like a
//           home or office, to <span style={highlightStyle}>Wide Area Networks (WANs)</span> spanning large distances,
//           such as the internet. Various network technologies, including
//           <span style={highlightStyle}> Ethernet</span>, <span style={highlightStyle}>Wi-Fi</span>, and 
//           <span style={highlightStyle}> cellular networks</span>, facilitate communication
//           between devices, supporting a wide range of applications and services
//           essential for modern computing and communication.
//         </p>

//         <div style={responsiveGrid}>
//           <div style={featureCardStyle}>
//             <img 
//               src={connectivity} 
//               alt="Network Connectivity" 
//               style={imageStyle}
//               loading="lazy"
//             />
//             <h3 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#ffd700" }}>
//               🌐 Connectivity
//             </h3>
//             <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
//               Seamless internet access and data transmission across all connected devices.
//             </p>
//           </div>
          
//           <div style={featureCardStyle}>
//             <img 
//               src={security} 
//               alt="Network Security" 
//               style={imageStyle}
//               loading="lazy"
//             />
//             <h3 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#ffd700" }}>
//               🔒 Security
//             </h3>
//             <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
//               Advanced security protocols to protect data and maintain network integrity.
//             </p>
//           </div>
          
//           <div style={featureCardStyle}>
//             <img 
//               src={performance} 
//               alt="Network Performance" 
//               style={imageStyle}
//               loading="lazy"
//             />
//             <h3 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#ffd700" }}>
//               ⚡ Performance
//             </h3>
//             <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
//               High-speed data transfer and optimized network performance for all users.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Network;
