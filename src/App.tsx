import { Dumbbell, Menu, X, Check, Star, Quote, Mail, Phone, MapPin, Instagram, Youtube, Twitter, Send } from "lucide-react"; // Añadimos más iconos
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden flex flex-col">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2 text-xl font-bold text-[#CCFF00]">
          <Dumbbell className="w-8 h-8" />
          <span>COACHSITO</span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#inicio" className="hover:text-[#CCFF00] transition-colors">Inicio</a>
          <a href="#planes" className="hover:text-[#CCFF00] transition-colors">Planes</a>
          <a href="#resultados" className="hover:text-[#CCFF00] transition-colors">Resultados</a>
          <a href="#contacto" className="hover:text-[#CCFF00] transition-colors">Contacto</a>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section id="inicio" className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a0a0a] z-10"></div>
          <div className="relative z-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
              TU MEJOR <span className="text-[#CCFF00]">VERSIÓN</span> <br /> EMPIEZA HOY
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Entrenamientos personalizados, nutrición inteligente y la motivación que necesitas para lograr tus objetivos físicos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#planes" className="px-8 py-4 bg-[#CCFF00] text-black font-bold rounded hover:bg-white transition-colors cursor-pointer">
                VER PLANES
              </a>
              <button className="px-8 py-4 border border-white text-white font-bold rounded hover:bg-white hover:text-black transition-colors">
                CONTACTAR
              </button>
            </div>
          </div>
        </section>

        {/* PLANES SECTION */}
        <section id="planes" className="py-20 px-6 bg-[#111111]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              PLANES DE <span className="text-[#CCFF00]">ENTRENAMIENTO</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus objetivos. Resultados garantizados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Plan 1 */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-zinc-800 hover:border-[#CCFF00] transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold mb-2">PRINCIPIANTE</h3>
                <p className="text-gray-500 mb-4 text-sm">Ideal para empezar</p>
                <div className="text-4xl font-extrabold text-white mb-6">$29<span className="text-lg text-gray-500">/mes</span></div>
                <ul className="text-gray-400 mb-8 flex-grow text-left space-y-3">
                  <li className="flex items-center gap-2"><Check size={16} className="text-[#CCFF00]"/> Acceso al gimnasio</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-[#CCFF00]"/> Rutinas básicas</li>
                  <li className="flex items-center gap-2 opacity-50"><X size={16} /> Clases grupales</li>
                </ul>
                <button className="w-full py-3 bg-zinc-800 text-white rounded font-bold hover:bg-zinc-700 transition-colors">
                  EMPEZAR AHORA
                </button>
              </div>

              {/* Plan 2 */}
              <div className="bg-[#CCFF00] text-black p-8 rounded-lg shadow-lg shadow-[#CCFF00]/20 transform hover:scale-105 transition-all duration-300 flex flex-col relative">
                <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-bl font-bold">POPULAR</div>
                <h3 className="text-xl font-bold mb-2">INTERMEDIO</h3>
                <p className="text-black/70 mb-4 text-sm">Para ir al siguiente nivel</p>
                <div className="text-4xl font-extrabold mb-6">$49<span className="text-lg text-black/50">/mes</span></div>
                <ul className="text-black/80 mb-8 flex-grow text-left space-y-3">
                  <li className="flex items-center gap-2"><Check size={16} className="text-black"/> Acceso total</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-black"/> Rutinas avanzadas</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-black"/> Plan nutricional</li>
                </ul>
                <button className="w-full py-3 bg-black text-white rounded font-bold hover:bg-zinc-900 transition-colors">
                  UNIRSE AHORA
                </button>
              </div>

              {/* Plan 3 */}
              <div className="bg-[#1a1a1a] p-8 rounded-lg border border-zinc-800 hover:border-[#CCFF00] transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold mb-2">PERSONALIZADO</h3>
                <p className="text-gray-500 mb-4 text-sm">Entrenamiento 1 a 1</p>
                <div className="text-4xl font-extrabold text-white mb-6">$99<span className="text-lg text-gray-500">/mes</span></div>
                <ul className="text-gray-400 mb-8 flex-grow text-left space-y-3">
                  <li className="flex items-center gap-2"><Check size={16} className="text-[#CCFF00]"/> Entrenador dedicado</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-[#CCFF00]"/> Dieta personalizada</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-[#CCFF00]"/> Soporte 24/7</li>
                </ul>
                <button className="w-full py-3 bg-zinc-800 text-white rounded font-bold hover:bg-zinc-700 transition-colors">
                  CONTACTAR
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS SECTION */}
        <section id="resultados" className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                HISTORIAS DE <span className="text-[#CCFF00]">ÉXITO</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                No hay mejor motivación que ver los resultados reales de personas como tú.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Testimonio 1 */}
              <div className="bg-[#111111] p-8 rounded-lg relative border border-zinc-800">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#CCFF00]/20" />
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "En 3 meses logré bajar mi porcentaje de grasa y ganar masa muscular. El plan nutricional fue clave. ¡Totalmente recomendado!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-[#CCFF00]">M</div>
                  <div>
                    <p className="font-bold text-white">María García</p>
                    <p className="text-sm text-gray-500">Perdió 8kg</p>
                  </div>
                </div>
              </div>

              {/* Testimonio 2 */}
              <div className="bg-[#111111] p-8 rounded-lg relative border border-zinc-800">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#CCFF00]/20" />
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Pensé que no podría volver a entrenar después de mi lesión. El coach me guió paso a paso. Ahora estoy más fuerte que antes."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-[#CCFF00]">C</div>
                  <div>
                    <p className="font-bold text-white">Carlos Pérez</p>
                    <p className="text-sm text-gray-500">Recuperación deportiva</p>
                  </div>
                </div>
              </div>

              {/* Testimonio 3 */}
              <div className="bg-[#111111] p-8 rounded-lg relative border border-zinc-800">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#CCFF00]/20" />
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "La mejor inversión que he hecho en mí mismo. El seguimiento semanal me mantuvo enfocado y motivado todo el tiempo."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-[#CCFF00]">A</div>
                  <div>
                    <p className="font-bold text-white">Ana Torres</p>
                    <p className="text-sm text-gray-500">Maratonista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-[#111111] border-t border-zinc-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold text-[#CCFF00] mb-4">
              <Dumbbell className="w-8 h-8" />
              <span>COACHSITO</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando vidas a través del entrenamiento personalizado y la disciplina. Tu objetivo es nuestra misión.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-[#CCFF00] transition-colors">Inicio</a></li>
              <li><a href="#planes" className="hover:text-[#CCFF00] transition-colors">Planes</a></li>
              <li><a href="#resultados" className="hover:text-[#CCFF00] transition-colors">Resultados</a></li>
              <li><a href="#" className="hover:text-[#CCFF00] transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#CCFF00]" />
                <span>Calle Fitness 123, Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CCFF00]" />
                <span>+34 600 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CCFF00]" />
                <span>hola@coachsito.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Recibe consejos de entrenamiento y nutrición cada semana.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#CCFF00]"
              />
              <button className="bg-[#CCFF00] text-black font-bold py-2 rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
                Suscribirse <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Coachsito. Todos los derechos reservados.
          </p>
          
{/* Redes Sociales */}
<div className="flex gap-4">
  <a 
    href="#" 
    aria-label="Instagram" 
    title="Síguenos en Instagram" 
    className="text-gray-500 hover:text-[#CCFF00] transition-colors"
  >
    <Instagram className="w-6 h-6" />
  </a>
  <a 
    href="#" 
    aria-label="YouTube" 
    title="Visita nuestro canal de YouTube" 
    className="text-gray-500 hover:text-[#CCFF00] transition-colors"
  >
    <Youtube className="w-6 h-6" />
  </a>
  <a 
    href="#" 
    aria-label="Twitter" 
    title="Síguenos en Twitter" 
    className="text-gray-500 hover:text-[#CCFF00] transition-colors"
  >
    <Twitter className="w-6 h-6" />
  </a>
</div>
        </div>
      </footer>

    </div>
  );
}

export default App;