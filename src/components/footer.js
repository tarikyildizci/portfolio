import React from "react"

function Footer() {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        marginTop: "2rem",
        backgroundColor: "#212121",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      © {new Date().getFullYear()}, Built by Tarık Yusuf Yıldızcı
    </div>
  )
}

export default Footer
