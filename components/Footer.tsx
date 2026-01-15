'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full border-t border-white/10 px-6 py-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-white/60">
        <span>© {new Date().getFullYear()} Digital Render Studios. Todos los derechos reservados.</span>

        <nav className="flex gap-6">
          {/* <a className="hover:text-white transition" href="#">
            Instagram
          </a>
          <a className="hover:text-white transition" href="#">
            LinkedIn
          </a> */}
          <a className="hover:text-white transition" href="mailto:info@digital-render.com" target='_blank'>
            info@digital-render.com
          </a>
        </nav>
      </div>
    </motion.footer>
  );
}
