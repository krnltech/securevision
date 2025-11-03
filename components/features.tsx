import { Card } from "@/components/ui/card"
import { Shield, Eye, Zap, Lock, AlertCircle, BarChart3 } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Real-Time Detection",
      description: "Instant threat detection powered by advanced AI algorithms",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Lightning Fast Response",
      description: "Sub-second alerts to prevent security incidents before they escalate",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with global security standards",
    },
    {
      icon: <Lock className="w-8 h-8 text-accent" />,
      title: "Privacy Protected",
      description: "On-premise processing options to keep sensitive data secure",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-accent" />,
      title: "Smart Alerts",
      description: "Customizable notifications and threat classification by severity",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Detailed Analytics",
      description: "Comprehensive reports and insights for security optimization",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Powerful Features for <span className="text-primary">Complete Protection</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our AI-powered platform delivers comprehensive security monitoring across all environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
