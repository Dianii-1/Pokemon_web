import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // configuracion para que acepte imagenes que no estan en el proyecto
  images:{
    remotePatterns:[
      {protocol:'https', hostname:'images.unsplash.com'},
      {protocol:'https', hostname:'raw.githubusercontent.com'}
    ]
  }
};

export default nextConfig;
