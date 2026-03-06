/* ============================================
   VIRTUS TRANSPORT — Internationalization (i18n)
   Supports: en, fr, es, ar
   ============================================ */

const TRANSLATIONS = {
  // ---- SHARED (nav, footer, CTAs) ----
  'nav.product': { en:'Product', fr:'Produit', es:'Producto', ar:'\u0627\u0644\u0645\u0646\u062A\u062C' },
  'nav.pricing': { en:'Pricing', fr:'Tarifs', es:'Precios', ar:'\u0627\u0644\u0623\u0633\u0639\u0627\u0631' },
  'nav.resources': { en:'Resources', fr:'Ressources', es:'Recursos', ar:'\u0627\u0644\u0645\u0648\u0627\u0631\u062F' },
  'nav.login': { en:'Log in', fr:'Connexion', es:'Iniciar sesi\u00F3n', ar:'\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644' },
  'nav.trial': { en:'Start free trial', fr:'Essai gratuit', es:'Prueba gratis', ar:'\u0627\u0628\u062F\u0623 \u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629' },

  // Footer
  'footer.product': { en:'Product', fr:'Produit', es:'Producto', ar:'\u0627\u0644\u0645\u0646\u062A\u062C' },
  'footer.features': { en:'Features', fr:'Fonctionnalit\u00E9s', es:'Funciones', ar:'\u0627\u0644\u0645\u064A\u0632\u0627\u062A' },
  'footer.pricing': { en:'Pricing', fr:'Tarifs', es:'Precios', ar:'\u0627\u0644\u0623\u0633\u0639\u0627\u0631' },
  'footer.docs': { en:'Documentation', fr:'Documentation', es:'Documentaci\u00F3n', ar:'\u0627\u0644\u0648\u062B\u0627\u0626\u0642' },
  'footer.api': { en:'API Reference', fr:'R\u00E9f\u00E9rence API', es:'Referencia API', ar:'\u0645\u0631\u062C\u0639 API' },
  'footer.company': { en:'Company', fr:'Entreprise', es:'Empresa', ar:'\u0627\u0644\u0634\u0631\u0643\u0629' },
  'footer.about': { en:'About', fr:'\u00C0 propos', es:'Acerca de', ar:'\u0639\u0646\u0627' },
  'footer.careers': { en:'Careers', fr:'Carri\u00E8res', es:'Empleos', ar:'\u0627\u0644\u0648\u0638\u0627\u0626\u0641' },
  'footer.contact': { en:'Contact', fr:'Contact', es:'Contacto', ar:'\u0627\u062A\u0635\u0644 \u0628\u0646\u0627' },
  'footer.partners': { en:'Partners', fr:'Partenaires', es:'Socios', ar:'\u0627\u0644\u0634\u0631\u0643\u0627\u0621' },
  'footer.resources': { en:'Resources', fr:'Ressources', es:'Recursos', ar:'\u0627\u0644\u0645\u0648\u0627\u0631\u062F' },
  'footer.blog': { en:'Blog', fr:'Blog', es:'Blog', ar:'\u0627\u0644\u0645\u062F\u0648\u0646\u0629' },
  'footer.help': { en:'Help Centre', fr:'Centre d\u2019aide', es:'Centro de ayuda', ar:'\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629' },
  'footer.guides': { en:'Guides', fr:'Guides', es:'Gu\u00EDas', ar:'\u0627\u0644\u0623\u062F\u0644\u0629' },
  'footer.legal': { en:'Legal', fr:'L\u00E9gal', es:'Legal', ar:'\u0642\u0627\u0646\u0648\u0646\u064A' },
  'footer.privacy': { en:'Privacy Policy', fr:'Politique de confidentialit\u00E9', es:'Pol\u00EDtica de privacidad', ar:'\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629' },
  'footer.terms': { en:'Terms of Service', fr:'Conditions d\u2019utilisation', es:'T\u00E9rminos de servicio', ar:'\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u062F\u0645\u0629' },
  'footer.copyright': { en:'\u00A9 2026 Virtus Transport. All rights reserved.', fr:'\u00A9 2026 Virtus Transport. Tous droits r\u00E9serv\u00E9s.', es:'\u00A9 2026 Virtus Transport. Todos los derechos reservados.', ar:'\u00A9 2026 Virtus Transport. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.' },
  'footer.tagline': { en:'The complete last-mile delivery management platform for modern transport companies.', fr:'La plateforme compl\u00E8te de gestion de livraison du dernier kilom\u00E8tre pour les entreprises de transport modernes.', es:'La plataforma completa de gesti\u00F3n de entregas de \u00FAltima milla para empresas de transporte modernas.', ar:'\u0645\u0646\u0635\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0644\u0644\u0645\u064A\u0644 \u0627\u0644\u0623\u062E\u064A\u0631 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062D\u062F\u064A\u062B\u0629.' },

  // Shared CTAs
  'cta.trial': { en:'Start free trial', fr:'Essai gratuit', es:'Prueba gratis', ar:'\u0627\u0628\u062F\u0623 \u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629' },
  'cta.demo': { en:'Book a demo', fr:'R\u00E9server une d\u00E9mo', es:'Reservar demo', ar:'\u0627\u062D\u062C\u0632 \u0639\u0631\u0636\u064B\u0627' },
  'cta.contact': { en:'Contact sales', fr:'Contacter les ventes', es:'Contactar ventas', ar:'\u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A' },
  'cta.learn': { en:'Learn more', fr:'En savoir plus', es:'M\u00E1s informaci\u00F3n', ar:'\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F' },

  // ---- HOMEPAGE ----
  'hero.badge': { en:'Now with AI-powered route optimization', fr:'Optimisation des itin\u00E9raires par IA', es:'Ahora con optimizaci\u00F3n de rutas con IA', ar:'\u0627\u0644\u0622\u0646 \u0645\u0639 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A' },
  'hero.title': { en:'Faster routes.<br>More deliveries.<br>Zero stress.', fr:'Itin\u00E9raires rapides.<br>Plus de livraisons.<br>Z\u00E9ro stress.', es:'Rutas m\u00E1s r\u00E1pidas.<br>M\u00E1s entregas.<br>Cero estr\u00E9s.', ar:'\u0645\u0633\u0627\u0631\u0627\u062A \u0623\u0633\u0631\u0639.<br>\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062A\u0648\u0635\u064A\u0644\u0627\u062A.<br>\u0628\u062F\u0648\u0646 \u0636\u063A\u0648\u0637.' },
  'hero.desc': { en:'Meet your new dispatch dashboard. Virtus Transport gives you full control over every route, driver, and delivery \u2014 in real time.', fr:'D\u00E9couvrez votre nouveau tableau de bord. Virtus Transport vous donne le contr\u00F4le total sur chaque itin\u00E9raire, chauffeur et livraison \u2014 en temps r\u00E9el.', es:'Conoce tu nuevo panel de despacho. Virtus Transport te da control total sobre cada ruta, conductor y entrega \u2014 en tiempo real.', ar:'\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u062C\u062F\u064A\u062F\u0629. Virtus Transport \u064A\u0645\u0646\u062D\u0643 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0641\u064A \u0643\u0644 \u0645\u0633\u0627\u0631 \u0648\u0633\u0627\u0626\u0642 \u0648\u062A\u0648\u0635\u064A\u0644 \u2014 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A.' },
  'hero.nocc': { en:'No credit card required', fr:'Aucune carte bancaire requise', es:'Sin tarjeta de cr\u00E9dito', ar:'\u0644\u0627 \u062D\u0627\u062C\u0629 \u0644\u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062A\u0645\u0627\u0646' },
  'hero.freetrial': { en:'14-day free trial', fr:'Essai gratuit de 14 jours', es:'14 d\u00EDas de prueba gratis', ar:'\u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 14 \u064A\u0648\u0645' },
  'hero.setup': { en:'Setup in 5 minutes', fr:'Configuration en 5 minutes', es:'Configuraci\u00F3n en 5 minutos', ar:'\u0625\u0639\u062F\u0627\u062F \u0641\u064A 5 \u062F\u0642\u0627\u0626\u0642' },

  'social.trust': { en:'Trusted by transport companies across 30+ countries', fr:'Utilis\u00E9 par des entreprises de transport dans plus de 30 pays', es:'Confianza de empresas de transporte en m\u00E1s de 30 pa\u00EDses', ar:'\u0645\u0648\u062B\u0648\u0642 \u0628\u0647 \u0645\u0646 \u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0641\u064A \u0623\u0643\u062B\u0631 \u0645\u0646 30 \u062F\u0648\u0644\u0629' },

  'solution.label': { en:'Platform', fr:'Plateforme', es:'Plataforma', ar:'\u0627\u0644\u0645\u0646\u0635\u0629' },
  'solution.title': { en:'A complete solution for<br>last mile management', fr:'Une solution compl\u00E8te pour<br>la gestion du dernier kilom\u00E8tre', es:'Una soluci\u00F3n completa para<br>la gesti\u00F3n de \u00FAltima milla', ar:'\u062D\u0644 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0625\u062F\u0627\u0631\u0629<br>\u0627\u0644\u0645\u064A\u0644 \u0627\u0644\u0623\u062E\u064A\u0631' },
  'solution.desc': { en:'From route planning to proof of delivery, Virtus gives your operations team everything they need in one powerful platform.', fr:'De la planification des itin\u00E9raires \u00E0 la preuve de livraison, Virtus fournit tout ce dont votre \u00E9quipe a besoin.', es:'Desde la planificaci\u00F3n de rutas hasta la prueba de entrega, Virtus ofrece todo lo que tu equipo necesita.', ar:'\u0645\u0646 \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0625\u0644\u0649 \u0625\u062B\u0628\u0627\u062A \u0627\u0644\u062A\u0648\u0635\u064A\u0644\u060C Virtus \u064A\u0648\u0641\u0631 \u0644\u0641\u0631\u064A\u0642\u0643 \u0643\u0644 \u0645\u0627 \u064A\u062D\u062A\u0627\u062C\u0647.' },
  'solution.orders': { en:'Orders', fr:'Commandes', es:'Pedidos', ar:'\u0627\u0644\u0637\u0644\u0628\u0627\u062A' },
  'solution.orders.desc': { en:'Import, manage, and track every delivery order from a single view.', fr:'Importez, g\u00E9rez et suivez chaque commande depuis une vue unique.', es:'Importa, gestiona y rastrea cada pedido desde una sola vista.', ar:'\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0648\u0625\u062F\u0627\u0631\u0629 \u0648\u062A\u062A\u0628\u0639 \u0643\u0644 \u0637\u0644\u0628 \u062A\u0648\u0635\u064A\u0644 \u0645\u0646 \u0639\u0631\u0636 \u0648\u0627\u062D\u062F.' },
  'solution.dispatch': { en:'Dispatching', fr:'R\u00E9partition', es:'Despacho', ar:'\u0627\u0644\u0625\u0631\u0633\u0627\u0644' },
  'solution.dispatch.desc': { en:'Auto-assign drivers and optimise routes with a single click.', fr:'Affectez automatiquement les chauffeurs et optimisez les itin\u00E9raires en un clic.', es:'Asigna conductores y optimiza rutas con un solo clic.', ar:'\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642\u064A\u0646 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629.' },
  'solution.drivers': { en:'Drivers', fr:'Chauffeurs', es:'Conductores', ar:'\u0627\u0644\u0633\u0627\u0626\u0642\u0648\u0646' },
  'solution.drivers.desc': { en:'Equip your drivers with an intuitive mobile app for every stop.', fr:'\u00C9quipez vos chauffeurs d\u2019une application mobile intuitive pour chaque arr\u00EAt.', es:'Equipa a tus conductores con una app m\u00F3vil intuitiva.', ar:'\u0632\u0648\u062F \u0633\u0627\u0626\u0642\u064A\u0643 \u0628\u062A\u0637\u0628\u064A\u0642 \u062C\u0648\u0627\u0644 \u0633\u0647\u0644 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645.' },
  'solution.analytics': { en:'Analytics', fr:'Analytique', es:'An\u00E1lisis', ar:'\u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A' },
  'solution.analytics.desc': { en:'Get actionable insights with real-time operational dashboards.', fr:'Obtenez des informations exploitables avec des tableaux de bord en temps r\u00E9el.', es:'Obt\u00E9n informaci\u00F3n pr\u00E1ctica con paneles operativos en tiempo real.', ar:'\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0631\u0624\u0649 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0646\u0641\u064A\u0630 \u0645\u0639 \u0644\u0648\u062D\u0627\u062A \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0641\u0648\u0631\u064A\u0629.' },

  // Route optimization
  'routes.label': { en:'Route Optimization', fr:'Optimisation des itin\u00E9raires', es:'Optimizaci\u00F3n de rutas', ar:'\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A' },
  'routes.title': { en:'Get fast and reliable<br>delivery routes', fr:'Obtenez des itin\u00E9raires de livraison<br>rapides et fiables', es:'Obt\u00E9n rutas de entrega<br>r\u00E1pidas y confiables', ar:'\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0645\u0633\u0627\u0631\u0627\u062A \u062A\u0648\u0635\u064A\u0644<br>\u0633\u0631\u064A\u0639\u0629 \u0648\u0645\u0648\u062B\u0648\u0642\u0629' },
  'routes.desc': { en:'Our AI engine calculates the most efficient routes across your entire fleet, factoring in traffic, time windows, vehicle capacity, and driver skills.', fr:'Notre moteur IA calcule les itin\u00E9raires les plus efficaces pour toute votre flotte, en tenant compte du trafic, des cr\u00E9neaux horaires et de la capacit\u00E9.', es:'Nuestro motor de IA calcula las rutas m\u00E1s eficientes para toda tu flota, considerando tr\u00E1fico, ventanas de tiempo y capacidad.', ar:'\u0645\u062D\u0631\u0643 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u062D\u0633\u0628 \u0623\u0643\u062B\u0631 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0643\u0641\u0627\u0621\u0629 \u0644\u0623\u0633\u0637\u0648\u0644\u0643 \u0628\u0627\u0644\u0643\u0627\u0645\u0644.' },
  'routes.explore': { en:'Explore route optimization', fr:'Explorer l\u2019optimisation des itin\u00E9raires', es:'Explorar optimizaci\u00F3n de rutas', ar:'\u0627\u0633\u062A\u0643\u0634\u0641 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A' },

  // Live monitoring
  'monitor.label': { en:'Live Monitoring', fr:'Suivi en direct', es:'Monitoreo en vivo', ar:'\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629' },
  'monitor.title': { en:'See every delivery<br>as it happens', fr:'Suivez chaque livraison<br>en temps r\u00E9el', es:'Ve cada entrega<br>en tiempo real', ar:'\u0634\u0627\u0647\u062F \u0643\u0644 \u062A\u0648\u0635\u064A\u0644<br>\u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A' },

  // Stats
  'stats.routes': { en:'Faster routes', fr:'Itin\u00E9raires plus rapides', es:'Rutas m\u00E1s r\u00E1pidas', ar:'\u0645\u0633\u0627\u0631\u0627\u062A \u0623\u0633\u0631\u0639' },
  'stats.fuel': { en:'Fuel savings', fr:'\u00C9conomies de carburant', es:'Ahorro de combustible', ar:'\u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0648\u0642\u0648\u062F' },
  'stats.saved': { en:'Saved per week on planning', fr:'\u00C9conomis\u00E9es par semaine', es:'Ahorradas por semana', ar:'\u062A\u0648\u0641\u064A\u0631 \u0623\u0633\u0628\u0648\u0639\u064A\u0627\u064B' },
  'stats.ontime': { en:'On-time delivery rate', fr:'Taux de livraison \u00E0 l\u2019heure', es:'Tasa de entrega puntual', ar:'\u0645\u0639\u062F\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0641\u064A \u0627\u0644\u0648\u0642\u062A' },

  // FAQ
  'faq.title': { en:'Frequently asked questions', fr:'Questions fr\u00E9quemment pos\u00E9es', es:'Preguntas frecuentes', ar:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629' },

  // Final CTA
  'final.title': { en:'Ready to optimize your deliveries?', fr:'Pr\u00EAt \u00E0 optimiser vos livraisons ?', es:'\u00BFListo para optimizar tus entregas?', ar:'\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u062A\u062D\u0633\u064A\u0646 \u062A\u0648\u0635\u064A\u0644\u0627\u062A\u0643\u061F' },
  'final.desc': { en:'Join hundreds of transport companies already using Virtus to deliver smarter.', fr:'Rejoignez des centaines d\u2019entreprises de transport qui utilisent d\u00E9j\u00E0 Virtus.', es:'\u00DAnete a cientos de empresas de transporte que ya usan Virtus.', ar:'\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0645\u0626\u0627\u062A \u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u062E\u062F\u0645 Virtus \u0628\u0627\u0644\u0641\u0639\u0644.' },

  // ---- PRICING PAGE ----
  'pricing.label': { en:'Pricing', fr:'Tarifs', es:'Precios', ar:'\u0627\u0644\u0623\u0633\u0639\u0627\u0631' },
  'pricing.title': { en:'Simple, transparent pricing', fr:'Tarification simple et transparente', es:'Precios simples y transparentes', ar:'\u0623\u0633\u0639\u0627\u0631 \u0628\u0633\u064A\u0637\u0629 \u0648\u0634\u0641\u0627\u0641\u0629' },
  'pricing.monthly': { en:'Monthly', fr:'Mensuel', es:'Mensual', ar:'\u0634\u0647\u0631\u064A' },
  'pricing.annual': { en:'Annual', fr:'Annuel', es:'Anual', ar:'\u0633\u0646\u0648\u064A' },
  'pricing.starter': { en:'Starter', fr:'Starter', es:'Inicial', ar:'\u0627\u0644\u0628\u062F\u0627\u064A\u0629' },
  'pricing.professional': { en:'Professional', fr:'Professionnel', es:'Profesional', ar:'\u0627\u062D\u062A\u0631\u0627\u0641\u064A' },
  'pricing.enterprise': { en:'Enterprise', fr:'Entreprise', es:'Empresa', ar:'\u0645\u0624\u0633\u0633\u0629' },
  'pricing.mo': { en:'/mo', fr:'/mois', es:'/mes', ar:'/\u0634\u0647\u0631' },
  'pricing.popular': { en:'Most popular', fr:'Le plus populaire', es:'M\u00E1s popular', ar:'\u0627\u0644\u0623\u0643\u062B\u0631 \u0634\u064A\u0648\u0639\u064B\u0627' },
  'pricing.custom': { en:'Custom', fr:'Sur mesure', es:'Personalizado', ar:'\u0645\u062E\u0635\u0635' },

  // ---- PRODUCT PAGE ----
  'product.label': { en:'Product', fr:'Produit', es:'Producto', ar:'\u0627\u0644\u0645\u0646\u062A\u062C' },
  'product.title': { en:'Everything you need to manage<br>last-mile delivery', fr:'Tout ce dont vous avez besoin pour g\u00E9rer<br>la livraison du dernier kilom\u00E8tre', es:'Todo lo que necesitas para gestionar<br>la entrega de \u00FAltima milla', ar:'\u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647 \u0644\u0625\u062F\u0627\u0631\u0629<br>\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u064A\u0644 \u0627\u0644\u0623\u062E\u064A\u0631' },

  // ---- RESOURCES PAGE ----
  'resources.label': { en:'Resources', fr:'Ressources', es:'Recursos', ar:'\u0627\u0644\u0645\u0648\u0627\u0631\u062F' },
  'resources.title': { en:'Insights & resources', fr:'Informations et ressources', es:'Ideas y recursos', ar:'\u0631\u0624\u0649 \u0648\u0645\u0648\u0627\u0631\u062F' },
  'resources.all': { en:'All', fr:'Tout', es:'Todo', ar:'\u0627\u0644\u0643\u0644' },
  'resources.guide': { en:'Guide', fr:'Guide', es:'Gu\u00EDa', ar:'\u062F\u0644\u064A\u0644' },
  'resources.casestudy': { en:'Case Study', fr:'\u00C9tude de cas', es:'Caso de estudio', ar:'\u062F\u0631\u0627\u0633\u0629 \u062D\u0627\u0644\u0629' },

  // ---- ABOUT PAGE ----
  'about.title': { en:'About Virtus Transport', fr:'\u00C0 propos de Virtus Transport', es:'Acerca de Virtus Transport', ar:'\u0639\u0646 Virtus Transport' },

  // ---- CONTACT PAGE ----
  'contact.title': { en:'Get in touch', fr:'Contactez-nous', es:'Cont\u00E1ctanos', ar:'\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627' },

  // ---- CAREERS PAGE ----
  'careers.title': { en:'Join our team', fr:'Rejoignez notre \u00E9quipe', es:'\u00DAnete a nuestro equipo', ar:'\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0641\u0631\u064A\u0642\u0646\u0627' },

  // ---- DOCS PAGE ----
  'docs.title': { en:'Documentation', fr:'Documentation', es:'Documentaci\u00F3n', ar:'\u0627\u0644\u0648\u062B\u0627\u0626\u0642' },

  // ---- HELP PAGE ----
  'help.title': { en:'Help Centre', fr:'Centre d\u2019aide', es:'Centro de ayuda', ar:'\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629' },

  // ---- AUTH PAGES ----
  'login.title': { en:'Log in to your account', fr:'Connectez-vous \u00E0 votre compte', es:'Inicia sesi\u00F3n en tu cuenta', ar:'\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0643' },
  'signup.title': { en:'Create your account', fr:'Cr\u00E9ez votre compte', es:'Crea tu cuenta', ar:'\u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u0643' },
  'demo.title': { en:'Book a demo', fr:'R\u00E9server une d\u00E9mo', es:'Reservar una demo', ar:'\u0627\u062D\u062C\u0632 \u0639\u0631\u0636\u064B\u0627 \u062A\u0648\u0636\u064A\u062D\u064A\u064B\u0627' },

  // Language names (for the switcher)
  'lang.en': { en:'English', fr:'English', es:'English', ar:'English' },
  'lang.fr': { en:'Fran\u00E7ais', fr:'Fran\u00E7ais', es:'Fran\u00E7ais', ar:'Fran\u00E7ais' },
  'lang.es': { en:'Espa\u00F1ol', fr:'Espa\u00F1ol', es:'Espa\u00F1ol', ar:'Espa\u00F1ol' },
  'lang.ar': { en:'\u0627\u0644\u0639\u0631\u0628\u064A\u0629', fr:'\u0627\u0644\u0639\u0631\u0628\u064A\u0629', es:'\u0627\u0644\u0639\u0631\u0628\u064A\u0629', ar:'\u0627\u0644\u0639\u0631\u0628\u064A\u0629' },
};

const SUPPORTED_LANGS = ['en','fr','es','ar'];
const DEFAULT_LANG = 'en';
const LANG_FLAGS = { en:'\uD83C\uDDEC\uD83C\uDDE7', fr:'\uD83C\uDDEB\uD83C\uDDF7', es:'\uD83C\uDDEA\uD83C\uDDF8', ar:'\uD83C\uDDF8\uD83C\uDDE6' };
const LANG_NAMES = { en:'English', fr:'Fran\u00E7ais', es:'Espa\u00F1ol', ar:'\u0627\u0644\u0639\u0631\u0628\u064A\u0629' };

// Detect best language
function detectLang() {
  // 1. Check localStorage
  const saved = localStorage.getItem('vtx-lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  // 2. Check URL param
  const url = new URLSearchParams(window.location.search);
  const param = url.get('lang');
  if (param && SUPPORTED_LANGS.includes(param)) return param;
  // 3. Browser language
  const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
  for (const lang of SUPPORTED_LANGS) {
    if (nav.startsWith(lang)) return lang;
  }
  return DEFAULT_LANG;
}

let currentLang = detectLang();

function t(key) {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[currentLang] || entry[DEFAULT_LANG] || key;
}

function applyTranslations() {
  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  // Translate data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Translate data-i18n-aria
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });

  // Set page direction for Arabic
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  // Update switcher displays
  document.querySelectorAll('.lang-current-flag').forEach(el => {
    el.textContent = LANG_FLAGS[currentLang];
  });
  document.querySelectorAll('.lang-current-name').forEach(el => {
    el.textContent = LANG_NAMES[currentLang];
  });
  document.querySelectorAll('.lang-dropdown-menu .lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem('vtx-lang', lang);
  applyTranslations();
}

// Build language switcher HTML
function buildLangSwitcher(id) {
  return `
    <div class="lang-switcher" id="${id}">
      <button class="lang-toggle" aria-label="Change language" onclick="document.getElementById('${id}').classList.toggle('open')">
        <span class="lang-current-flag">${LANG_FLAGS[currentLang]}</span>
        <span class="lang-current-name">${LANG_NAMES[currentLang]}</span>
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4l4 4 4-4"/></svg>
      </button>
      <div class="lang-dropdown-menu">
        ${SUPPORTED_LANGS.map(l => `
          <button class="lang-option ${l===currentLang?'active':''}" data-lang="${l}" onclick="setLang('${l}');document.getElementById('${id}').classList.remove('open')">
            <span>${LANG_FLAGS[l]}</span>
            <span>${LANG_NAMES[l]}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

// Inject switchers
document.addEventListener('DOMContentLoaded', function() {
  // Nav switcher
  const navSlot = document.getElementById('lang-switch-nav');
  if (navSlot) navSlot.innerHTML = buildLangSwitcher('lang-nav');

  // Footer switcher
  const footSlot = document.getElementById('lang-switch-footer');
  if (footSlot) footSlot.innerHTML = buildLangSwitcher('lang-footer');

  applyTranslations();

  // Close dropdowns on outside click
  document.addEventListener('click', function(e) {
    document.querySelectorAll('.lang-switcher.open').forEach(sw => {
      if (!sw.contains(e.target)) sw.classList.remove('open');
    });
  });
});
