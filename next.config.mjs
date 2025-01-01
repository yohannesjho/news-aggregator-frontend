/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['websitedemos.net',"gizmodo.com"], 
      },
      experimental: {
        missingSuspenseWithCSRBailout: false,
      },
       
      
};

export default nextConfig;
