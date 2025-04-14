// Import any icons you need
import { SiNginxproxymanager, SiNextcloud } from "react-icons/si"

// === Don't change these imports! =============
import { Service } from "../components/services"
// =============================================

// Add your services here
const services: Service[] = [
  {
    name: "NGINX Proxy Manager", // Name of the service
    icon: SiNginxproxymanager, // Corresponding icon imported from above
  },
  {
    name: "Nextcloud", // Add as many as you like!
    icon: SiNextcloud,
  },
]

export default services