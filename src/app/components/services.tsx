import services from "../config/services"

interface Service {
  name: string;
  icon: React.ComponentType<{ size: number }>;
}

function Services() {
  return (
    <div className="space-y-2">
      {services.map((service: Service) => {
        const Icon = service.icon;
        return (
          <div key={service.name} className="flex items-center justify-center gap-2">
            <Icon size={24} />
            <h2 className="text-xl">{service.name}</h2>
          </div>
        );
      })}
    </div>
  )
}

export default Services
export type { Service }