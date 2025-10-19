import React, { useState } from 'react';
import { ChevronRight, Waves, Maximize2, Users, Coffee, Wifi, Wind, Sparkles } from 'lucide-react';

function Rooms() {
  const [hoveredSuite, setHoveredSuite] = useState(null);
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const suites = [
    {
      id: 1,
      name: "Azure Horizon Suite",
      tagline: "Where sky meets sea",
      size: "850 sq ft",
      guests: "2-3 Guests",
      bedrooms: "1 King Bedroom",
      price: "895",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      features: ["Private Balcony", "Ocean-facing Soaking Tub", "Floor-to-Ceiling Glass", "Workspace"],
      description: "Perched at the edge of tranquility, this suite offers an uninterrupted canvas of blue where horizon and water become one."
    },
    {
      id: 2,
      name: "Shimmer Penthouse",
      tagline: "Elevated luminescence",
      size: "1,450 sq ft",
      guests: "4-6 Guests",
      bedrooms: "2 Bedrooms",
      price: "1,895",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      features: ["Wraparound Terrace", "Panoramic Glass Walls", "Butler Service", "Sunrise Lounge"],
      description: "Our crown jewel floats above the coastline, where golden light dances across waves and every moment feels suspended in luxury.",
      premium: true
    },
    {
      id: 3,
      name: "Driftwood Sanctuary",
      tagline: "Organic serenity",
      size: "950 sq ft",
      guests: "2-4 Guests",
      bedrooms: "1 King + Daybed",
      price: "1,195",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      features: ["Private Garden", "Outdoor Shower", "Ocean Views", "Meditation Space"],
      description: "Ground-level elegance with tactile materials and direct sand access. A sanctuary that breathes with the rhythm of the tides."
    }
  ];

  const amenities = [
    { icon: Waves, label: "Ocean Sounds", desc: "Fall asleep to natural wave acoustics" },
    { icon: Sparkles, label: "Sunrise Views", desc: "Wake to golden light dancing on water" },
    { icon: Coffee, label: "Premium Minibar", desc: "Curated local and international selections" },
    { icon: Wind, label: "Climate Control", desc: "Whisper-quiet, personalized comfort" },
    { icon: Wifi, label: "Seamless Tech", desc: "High-speed connectivity throughout" },
    { icon: Users, label: "Concierge", desc: "24/7 dedicated guest services" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFDFC' }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80')`,
          }}
        />
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(26, 46, 58, 0.4) 0%, rgba(155, 193, 213, 0.2) 50%, rgba(252, 253, 252, 1) 100%)',
            zIndex: 1
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-6 inline-block">
            <Waves className="w-16 h-16 mx-auto mb-4 animate-pulse" style={{ color: '#9BC1D5' }} />
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight" style={{ color: '#1A2E3A' }}>
            Oceanfront Suites
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed" style={{ color: '#8A8B8C' }}>
            Panoramic ocean views through glass walls, where golden sunrise meets endless blue
          </p>
          <button 
            className="group px-8 py-4 rounded-full text-white text-lg font-light transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
            style={{ backgroundColor: '#9BC1D5' }}
          >
            Discover Your Suite
            <ChevronRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2" size={20} />
          </button>
        </div>
      </div>

      {/* Suite Cards Section */}
      <div className="py-24 px-6" style={{ backgroundColor: '#F5F2E8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4" style={{ color: '#1A2E3A' }}>
              Curated Sanctuaries
            </h2>
            <p className="text-lg font-light" style={{ color: '#8A8B8C' }}>
              Each suite is a study in restraint and radiance
            </p>
          </div>

          <div className="space-y-8">
            {suites.map((suite, index) => (
              <div
                key={suite.id}
                className="relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.02]"
                style={{ 
                  backgroundColor: '#FCFDFC',
                  boxShadow: hoveredSuite === suite.id ? '0 25px 50px -12px rgba(155, 193, 213, 0.35)' : '0 10px 30px -10px rgba(26, 46, 58, 0.1)'
                }}
                onMouseEnter={() => setHoveredSuite(suite.id)}
                onMouseLeave={() => setHoveredSuite(null)}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-96 md:h-auto overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                      style={{
                        backgroundImage: `url('${suite.image}')`,
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-br transition-opacity duration-700"
                      style={{
                        background: suite.premium 
                          ? 'linear-gradient(135deg, rgba(212, 193, 156, 0.25), rgba(155, 193, 213, 0.25))'
                          : 'linear-gradient(135deg, rgba(155, 193, 213, 0.2), rgba(26, 46, 58, 0.2))',
                        opacity: hoveredSuite === suite.id ? 0.3 : 0.5
                      }}
                    />
                    {suite.premium && (
                      <div 
                        className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-light backdrop-blur-sm z-10"
                        style={{ backgroundColor: 'rgba(212, 193, 156, 0.95)', color: '#1A2E3A' }}
                      >
                        Premium Collection
                      </div>
                    )}
                    <div 
                      className="absolute bottom-6 left-6 p-4 rounded-2xl backdrop-blur-md z-10 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: 'rgba(252, 253, 252, 0.9)',
                        opacity: hoveredSuite === suite.id ? 1 : 0
                      }}
                    >
                      <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Starting from</p>
                      <p className="text-2xl font-light" style={{ color: suite.premium ? '#D4C19C' : '#9BC1D5' }}>
                        ${suite.price}
                        <span className="text-sm ml-1" style={{ color: '#8A8B8C' }}>/night</span>
                      </p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-12 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-light mb-2 tracking-widest uppercase" style={{ color: '#9BC1D5' }}>
                        {suite.tagline}
                      </p>
                      <h3 className="text-4xl font-light mb-4" style={{ color: '#1A2E3A' }}>
                        {suite.name}
                      </h3>
                      <p className="text-base mb-6 leading-relaxed" style={{ color: '#8A8B8C' }}>
                        {suite.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: hoveredSuite === suite.id ? '#F5F2E8' : 'transparent' }}>
                          <Maximize2 className="w-5 h-5 mx-auto mb-2" style={{ color: '#9BC1D5' }} />
                          <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Size</p>
                          <p className="text-sm font-light" style={{ color: '#1A2E3A' }}>{suite.size}</p>
                        </div>
                        <div className="text-center p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: hoveredSuite === suite.id ? '#F5F2E8' : 'transparent' }}>
                          <Users className="w-5 h-5 mx-auto mb-2" style={{ color: '#9BC1D5' }} />
                          <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Capacity</p>
                          <p className="text-sm font-light" style={{ color: '#1A2E3A' }}>{suite.guests}</p>
                        </div>
                        <div className="text-center p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: hoveredSuite === suite.id ? '#F5F2E8' : 'transparent' }}>
                          <Waves className="w-5 h-5 mx-auto mb-2" style={{ color: '#9BC1D5' }} />
                          <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Layout</p>
                          <p className="text-sm font-light" style={{ color: '#1A2E3A' }}>{suite.bedrooms}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {suite.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 rounded-full text-xs font-light border transition-all duration-300"
                            style={{ 
                              backgroundColor: hoveredSuite === suite.id ? '#FCFDFC' : '#F5F2E8',
                              borderColor: hoveredSuite === suite.id ? '#9BC1D5' : 'transparent',
                              color: '#1A2E3A' 
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: '#F5F2E8' }}>
                      <div>
                        <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Nightly Rate</p>
                        <p className="text-3xl font-light" style={{ color: suite.premium ? '#D4C19C' : '#1A2E3A' }}>
                          ${suite.price}
                          <span className="text-base ml-2" style={{ color: '#8A8B8C' }}>/night</span>
                        </p>
                      </div>
                      <button 
                        className="px-8 py-3 rounded-full font-light transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                        style={{
                          backgroundColor: suite.premium ? '#D4C19C' : '#9BC1D5',
                          color: suite.premium ? '#1A2E3A' : '#FCFDFC'
                        }}
                      >
                        Reserve Suite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="py-24 px-6" style={{ backgroundColor: '#FCFDFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4" style={{ color: '#1A2E3A' }}>
              Suite Amenities
            </h2>
            <p className="text-lg font-light" style={{ color: '#8A8B8C' }}>
              Every detail designed to enhance your oceanfront experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
                  style={{ 
                    backgroundColor: selectedAmenity === index ? '#F5F2E8' : 'transparent',
                    border: `1px solid ${selectedAmenity === index ? '#9BC1D5' : 'transparent'}`
                  }}
                  onClick={() => setSelectedAmenity(selectedAmenity === index ? null : index)}
                >
                  <Icon 
                    className="mb-4 transition-all duration-300 group-hover:scale-110" 
                    size={32}
                    style={{ color: selectedAmenity === index ? '#9BC1D5' : '#8A8B8C' }}
                  />
                  <h3 className="text-xl font-light mb-2" style={{ color: '#1A2E3A' }}>
                    {amenity.label}
                  </h3>
                  <p className="text-sm font-light" style={{ color: '#8A8B8C' }}>
                    {amenity.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-24 px-6" style={{ backgroundColor: '#F5F2E8' }}>
        <div className="max-w-5xl mx-auto text-center">
          <Waves className="w-12 h-12 mx-auto mb-6" style={{ color: '#9BC1D5' }} />
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#1A2E3A' }}>
            The Oceanfront Suite Experience
          </h2>
          <p className="text-lg font-light mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: '#8A8B8C' }}>
            Each suite features floor-to-ceiling glass walls that dissolve the boundary between interior and ocean. As sunrise paints the sky in gold and azure, your suite becomes a vessel of light—a sanctuary where the rhythm of waves sets the pace of your day.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FCFDFC' }}>
              <h3 className="text-xl font-light mb-3" style={{ color: '#1A2E3A' }}>Morning Rituals</h3>
              <p className="text-sm font-light" style={{ color: '#8A8B8C' }}>
                Wake to golden sunrise views and enjoy breakfast on your private balcony as waves whisper below.
              </p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FCFDFC' }}>
              <h3 className="text-xl font-light mb-3" style={{ color: '#1A2E3A' }}>Glass Architecture</h3>
              <p className="text-sm font-light" style={{ color: '#8A8B8C' }}>
                Panoramic windows create an unobstructed connection to the ocean, making nature your constant companion.
              </p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FCFDFC' }}>
              <h3 className="text-xl font-light mb-3" style={{ color: '#1A2E3A' }}>Serene Elevation</h3>
              <p className="text-sm font-light" style={{ color: '#8A8B8C' }}>
                Positioned above the coastline for privacy while maintaining intimate proximity to the water's edge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#1A2E3A' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(155, 193, 213, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(212, 193, 156, 0.2) 0%, transparent 50%)`
          }} />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#FCFDFC' }}>
            Reserve Your Oceanfront Sanctuary
          </h2>
          <p className="text-lg font-light mb-8" style={{ color: '#9BC1D5' }}>
            Experience where glass walls meet endless horizons
          </p>
          <button 
            className="px-10 py-4 rounded-full font-light text-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
            style={{ backgroundColor: '#D4C19C', color: '#1A2E3A' }}
          >
            Inquire About Availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rooms;