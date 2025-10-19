import React, { useState } from 'react';
import { ChevronRight, Sunset, Maximize2, Users, Droplet, Wine, Sparkles, Flame } from 'lucide-react';

function SunsetVillas() {
  const [hoveredVilla, setHoveredVilla] = useState(null);
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const villas = [
    {
      id: 1,
      name: "Golden Horizon Villa",
      tagline: "Private infinity, endless sky",
      size: "2,400 sq ft",
      guests: "4-6 Guests",
      bedrooms: "2 Bedrooms",
      price: "2,495",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80",
      features: ["Private Infinity Pool", "Sunset Terrace", "Outdoor Kitchen", "Butler Service"],
      description: "Perched where golden hour never ends, this villa captures the magic of twilight with its luminescent infinity pool that mirrors the painted sky."
    },
    {
      id: 2,
      name: "Shimmer Sky Estate",
      tagline: "Where light becomes architecture",
      size: "3,800 sq ft",
      guests: "8-10 Guests",
      bedrooms: "4 Bedrooms",
      price: "4,895",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      features: ["Heated Infinity Pool", "Rooftop Observatory", "Wine Cellar", "Private Chef"],
      description: "Our crown jewel radiates with warmth as day surrenders to night. Glass walls dissolve boundaries, making sunset an immersive experience.",
      premium: true
    },
    {
      id: 3,
      name: "Luminous Sanctuary Villa",
      tagline: "Intimate twilight refuge",
      size: "2,800 sq ft",
      guests: "6-8 Guests",
      bedrooms: "3 Bedrooms",
      price: "3,295",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80",
      features: ["Infinity Edge Pool", "Fire Pit Lounge", "Spa Pavilion", "Ocean Deck"],
      description: "A sanctuary designed for those who worship at the altar of golden hour. Every angle is choreographed to celebrate the day's final performance."
    }
  ];

  const amenities = [
    { icon: Droplet, label: "Infinity Pools", desc: "Temperature-controlled with LED underwater lighting" },
    { icon: Sunset, label: "Sunset Terraces", desc: "Choreographed seating for the perfect golden hour" },
    { icon: Wine, label: "Private Bars", desc: "Curated spirits and sunset cocktail service" },
    { icon: Flame, label: "Fire Features", desc: "Gas fire pits and luminescent evening ambiance" },
    { icon: Sparkles, label: "Smart Lighting", desc: "Programmable mood lighting synced to sunset" },
    { icon: Users, label: "Concierge", desc: "24/7 villa services and private experiences" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFDFC' }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80')`,
          }}
        />
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(26, 46, 58, 0.5) 0%, rgba(212, 193, 156, 0.3) 50%, rgba(252, 253, 252, 1) 100%)',
            zIndex: 1
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-6 inline-block">
            <Sunset className="w-16 h-16 mx-auto mb-4 animate-pulse" style={{ color: '#D4C19C' }} />
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight" style={{ color: '#1A2E3A' }}>
            Sunset Villas
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed" style={{ color: '#8A8B8C' }}>
            Where infinity pools meet golden horizons and every evening is a masterpiece
          </p>
          <button 
            className="group px-8 py-4 rounded-full text-lg font-light transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
            style={{ backgroundColor: '#D4C19C', color: '#1A2E3A' }}
          >
            Discover Your Villa
            <ChevronRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2" size={20} />
          </button>
        </div>
      </div>

      {/* Villa Cards Section */}
      <div className="py-24 px-6" style={{ backgroundColor: '#F5F2E8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4" style={{ color: '#1A2E3A' }}>
              Luminescent Escapes
            </h2>
            <p className="text-lg font-light" style={{ color: '#8A8B8C' }}>
              Villas designed to capture and celebrate the golden hour
            </p>
          </div>

          <div className="space-y-8">
            {villas.map((villa, index) => (
              <div
                key={villa.id}
                className="relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.02]"
                style={{ 
                  backgroundColor: '#FCFDFC',
                  boxShadow: hoveredVilla === villa.id ? '0 25px 50px -12px rgba(212, 193, 156, 0.35)' : '0 10px 30px -10px rgba(26, 46, 58, 0.1)'
                }}
                onMouseEnter={() => setHoveredVilla(villa.id)}
                onMouseLeave={() => setHoveredVilla(null)}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-96 md:h-auto overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                      style={{
                        backgroundImage: `url('${villa.image}')`,
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-br transition-opacity duration-700"
                      style={{
                        background: villa.premium 
                          ? 'linear-gradient(135deg, rgba(212, 193, 156, 0.3), rgba(155, 193, 213, 0.2))'
                          : 'linear-gradient(135deg, rgba(212, 193, 156, 0.2), rgba(26, 46, 58, 0.2))',
                        opacity: hoveredVilla === villa.id ? 0.3 : 0.5
                      }}
                    />
                    {villa.premium && (
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
                        opacity: hoveredVilla === villa.id ? 1 : 0
                      }}
                    >
                      <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Starting from</p>
                      <p className="text-2xl font-light" style={{ color: '#D4C19C' }}>
                        ${villa.price}
                        <span className="text-sm ml-1" style={{ color: '#8A8B8C' }}>/night</span>
                      </p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-12 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-light mb-2 tracking-widest uppercase" style={{ color: '#D4C19C' }}>
                        {villa.tagline}
                      </p>
                      <h3 className="text-4xl font-light mb-4" style={{ color: '#1A2E3A' }}>
                        {villa.name}
                      </h3>
                      <p className="text-base mb-6 leading-relaxed" style={{ color: '#8A8B8C' }}>
                        {villa.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: hoveredVilla === villa.id ? '#F5F2E8' : 'transparent' }}>
                          <Maximize2 className="w-5 h-5 mx-auto mb-2" style={{ color: '#9BC1D5' }} />
                          <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Size</p>
                          <p className="text-sm font-light" style={{ color: '#1A2E3A' }}>{villa.size}</p>
                        </div>
                        <div className="text-center p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: hoveredVilla === villa.id ? '#F5F2E8' : 'transparent' }}>
                          <Users className="w-5 h-5 mx-auto mb-2" style={{ color: '#9BC1D5' }} />
                          <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Capacity</p>
                          <p className="text-sm font-light" style={{ color: '#1A2E3A' }}>{villa.guests}</p>
                        </div>
                        <div className="text-center p-4 rounded-xl transition-all duration-300" style={{ backgroundColor: hoveredVilla === villa.id ? '#F5F2E8' : 'transparent' }}>
                          <Sunset className="w-5 h-5 mx-auto mb-2" style={{ color: '#D4C19C' }} />
                          <p className="text-xs mb-1" style={{ color: '#8A8B8C' }}>Layout</p>
                          <p className="text-sm font-light" style={{ color: '#1A2E3A' }}>{villa.bedrooms}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {villa.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 rounded-full text-xs font-light border transition-all duration-300"
                            style={{ 
                              backgroundColor: hoveredVilla === villa.id ? '#FCFDFC' : '#F5F2E8',
                              borderColor: hoveredVilla === villa.id ? '#D4C19C' : 'transparent',
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
                        <p className="text-3xl font-light" style={{ color: villa.premium ? '#D4C19C' : '#1A2E3A' }}>
                          ${villa.price}
                          <span className="text-base ml-2" style={{ color: '#8A8B8C' }}>/night</span>
                        </p>
                      </div>
                      <button 
                        className="px-8 py-3 rounded-full font-light transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                        style={{
                          backgroundColor: villa.premium ? '#D4C19C' : '#9BC1D5',
                          color: villa.premium ? '#1A2E3A' : '#FCFDFC'
                        }}
                      >
                        Reserve Villa
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
              Villa Amenities
            </h2>
            <p className="text-lg font-light" style={{ color: '#8A8B8C' }}>
              Every detail designed to enhance your golden hour experience
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
                    border: `1px solid ${selectedAmenity === index ? '#D4C19C' : 'transparent'}`
                  }}
                  onClick={() => setSelectedAmenity(selectedAmenity === index ? null : index)}
                >
                  <Icon 
                    className="mb-4 transition-all duration-300 group-hover:scale-110" 
                    size={32}
                    style={{ color: selectedAmenity === index ? '#D4C19C' : '#9BC1D5' }}
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
          <Sunset className="w-12 h-12 mx-auto mb-6" style={{ color: '#D4C19C' }} />
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#1A2E3A' }}>
            The Sunset Villa Experience
          </h2>
          <p className="text-lg font-light mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: '#8A8B8C' }}>
            Each villa is positioned to capture the sun's final act. As daylight fades, underwater LED lighting illuminates your infinity pool, creating a luminescent mirror that reflects the sky's changing palette. This is more than accommodation—it's a front-row seat to nature's nightly performance.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FCFDFC' }}>
              <h3 className="text-xl font-light mb-3" style={{ color: '#1A2E3A' }}>Sunset Rituals</h3>
              <p className="text-sm font-light" style={{ color: '#8A8B8C' }}>
                Our concierge curates nightly sunset experiences, from champagne service to private chef-prepared golden hour dining.
              </p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FCFDFC' }}>
              <h3 className="text-xl font-light mb-3" style={{ color: '#1A2E3A' }}>Architectural Poetry</h3>
              <p className="text-sm font-light" style={{ color: '#8A8B8C' }}>
                Floor-to-ceiling glass and infinity edges create seamless transitions between interior luxury and coastal beauty.
              </p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FCFDFC' }}>
              <h3 className="text-xl font-light mb-3" style={{ color: '#1A2E3A' }}>Total Privacy</h3>
              <p className="text-sm font-light" style={{ color: '#8A8B8C' }}>
                Each villa is positioned for maximum seclusion, ensuring your golden hour moments remain intimately yours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#1A2E3A' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212, 193, 156, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(155, 193, 213, 0.3) 0%, transparent 50%)`
          }} />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#FCFDFC' }}>
            Reserve Your Luminescent Retreat
          </h2>
          <p className="text-lg font-light mb-8" style={{ color: '#9BC1D5' }}>
            Experience where infinity pools meet endless horizons
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

export default SunsetVillas;