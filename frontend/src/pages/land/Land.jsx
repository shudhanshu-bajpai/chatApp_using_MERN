import { MessageCircle, Video, Shield, Share2, Zap, Users, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "./Land.css";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4 flex justify-center text-sky-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sky-100">{description}</p>
    </div>
  );
}

function Land() {
  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Crystal Clear Video Calls",
      description: "Experience HD video calls with superior audio quality for seamless communication"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "End-to-End Encryption",
      description: "Your conversations are protected with state-of-the-art encryption technology"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Easy File Sharing",
      description: "Share photos, videos, and documents instantly during chats or calls"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Instant message delivery and low-latency video calls for real-time communication"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Conversations",
      description: "Create group chats and host video conferences with multiple participants"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cross-Platform",
      description: "Access Streamly from any device - desktop, tablet, or mobile"
    }
  ];
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Hero Section */}
      <header className="container px-4 py-16 md:py-24 text-center text-white bg-black ">
        <div className="flex items-center justify-center mb-6">
          <MessageCircle className="h-12 md:h-14 w-12 md:w-14 text-white mr-2" />
          <h1 className="text-5xl md:text-7xl font-bold text-sky-500">
            Streamly
          </h1>
        </div>
        <p className="text-lg md:text-2xl text-sky-100 max-w-2xl mx-auto mb-8">
          Connect, communicate, and collaborate securely with crystal-clear video calls and instant messaging
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => navigate("/signup")} className="w-full sm:w-auto bg-white text-sky-600 hover:bg-sky-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto border border-white text-white hover:bg-sky-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            See How It Works
          </button>
        </div>
      </header>
      <hr />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">Why Choose Streamly?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Security Banner */}
      <section className="bg-black backdrop-blur-sm py-16 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-white">
            Your Privacy is Our Priority 
          </h2>
          <p className="text-base md:text-lg text-sky-100 max-w-2xl mx-auto">
            Streamly uses advanced encryption protocols to ensure your conversations 
            and shared content remain private and secure at all times.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <hr />
      <section className="container mx-auto px-4 py-16 md:py-24 text-center bg-black">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
          Ready to Start Streaming?
        </h2>
        <p className="text-lg md:text-xl text-sky-100 mb-8">
          Join millions of users who trust Streamly for their communication needs.
        </p>
        <button className="w-full sm:w-auto bg-white text-sky-500 hover:bg-sky-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
          Create Free Account
        </button>
      </section>
      <footer className=" text-white text-center py-4">
        <p className="text-sm">
          Made with <span className="text-red-500">❤️</span> by Shudhanshu Bajpai
        </p>
      </footer>
    </div>
  );
}

export default Land;
