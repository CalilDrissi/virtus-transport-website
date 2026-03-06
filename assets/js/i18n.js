/* ============================================
   VIRTUS TRANSPORT — Internationalization (i18n)
   Supports: en, fr, es, ar
   ============================================ */

const TRANSLATIONS = {
  // ---- SHARED (nav, footer, CTAs) ----
  'nav.product': { en:'Product', fr:'Produit', es:'Producto', ar:'\u0627\u0644\u0645\u0646\u062A\u062C' },
  'nav.solutions': { en:'Solutions', fr:'Solutions', es:'Soluciones', ar:'\u0627\u0644\u062D\u0644\u0648\u0644' },
  'nav.pricing': { en:'Pricing', fr:'Tarifs', es:'Precios', ar:'\u0627\u0644\u0623\u0633\u0639\u0627\u0631' },
  'nav.resources': { en:'Resources', fr:'Ressources', es:'Recursos', ar:'\u0627\u0644\u0645\u0648\u0627\u0631\u062F' },
  'nav.docs': { en:'Docs', fr:'Docs', es:'Docs', ar:'\u0627\u0644\u0648\u062B\u0627\u0626\u0642' },
  'nav.partners': { en:'Partners', fr:'Partenaires', es:'Socios', ar:'\u0627\u0644\u0634\u0631\u0643\u0627\u0621' },
  'nav.about': { en:'About', fr:'\u00C0 propos', es:'Acerca de', ar:'\u0639\u0646\u0627' },
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
  'footer.tagline': { en:'The all-in-one ERP platform built for transport and logistics companies.', fr:'La plateforme ERP tout-en-un con\u00E7ue pour les entreprises de transport et logistique.', es:'La plataforma ERP todo en uno dise\u00F1ada para empresas de transporte y log\u00EDstica.', ar:'\u0645\u0646\u0635\u0629 ERP \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u0645\u0635\u0645\u0645\u0629 \u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0648\u0627\u0644\u0644\u0648\u062C\u0633\u062A\u064A\u0643.' },

  // Shared CTAs
  'cta.trial': { en:'Start free trial', fr:'Essai gratuit', es:'Prueba gratis', ar:'\u0627\u0628\u062F\u0623 \u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629' },
  'cta.demo': { en:'Book a demo', fr:'R\u00E9server une d\u00E9mo', es:'Reservar demo', ar:'\u0627\u062D\u062C\u0632 \u0639\u0631\u0636\u064B\u0627' },
  'cta.contact': { en:'Contact sales', fr:'Contacter les ventes', es:'Contactar ventas', ar:'\u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A' },
  'cta.learn': { en:'Learn more', fr:'En savoir plus', es:'M\u00E1s informaci\u00F3n', ar:'\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F' },

  // ---- HOMEPAGE ----
  'hero.badge': { en:'The ERP built for transport companies', fr:'L\u2019ERP con\u00E7u pour le transport', es:'El ERP dise\u00F1ado para empresas de transporte', ar:'ERP \u0645\u0635\u0645\u0645 \u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644' },
  'hero.title': { en:'One platform.<br>Every operation.<br>Total control.', fr:'Une plateforme.<br>Toutes les op\u00E9rations.<br>Contr\u00F4le total.', es:'Una plataforma.<br>Cada operaci\u00F3n.<br>Control total.', ar:'\u0645\u0646\u0635\u0629 \u0648\u0627\u062D\u062F\u0629.<br>\u0643\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A.<br>\u062A\u062D\u0643\u0645 \u0643\u0627\u0645\u0644.' },
  'hero.desc': { en:'Virtus is the all-in-one ERP that unifies fleet management, route planning, accounting, HR, and operations \u2014 purpose-built for transport and logistics companies.', fr:'Virtus est l\u2019ERP tout-en-un qui unifie la gestion de flotte, la planification des itin\u00E9raires, la comptabilit\u00E9, les RH et les op\u00E9rations \u2014 con\u00E7u pour le transport et la logistique.', es:'Virtus es el ERP todo en uno que unifica gesti\u00F3n de flotas, planificaci\u00F3n de rutas, contabilidad, RRHH y operaciones \u2014 dise\u00F1ado para transporte y log\u00EDstica.', ar:'Virtus \u0647\u0648 \u0646\u0638\u0627\u0645 ERP \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644 \u0627\u0644\u0630\u064A \u064A\u0648\u062D\u062F \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0637\u0648\u0644 \u0648\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u2014 \u0645\u0635\u0645\u0645 \u062E\u0635\u064A\u0635\u064B\u0627 \u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644.' },
  'hero.nocc': { en:'No credit card required', fr:'Aucune carte bancaire requise', es:'Sin tarjeta de cr\u00E9dito', ar:'\u0644\u0627 \u062D\u0627\u062C\u0629 \u0644\u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062A\u0645\u0627\u0646' },
  'hero.freetrial': { en:'14-day free trial', fr:'Essai gratuit de 14 jours', es:'14 d\u00EDas de prueba gratis', ar:'\u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 14 \u064A\u0648\u0645' },
  'hero.setup': { en:'Setup in 5 minutes', fr:'Configuration en 5 minutes', es:'Configuraci\u00F3n en 5 minutos', ar:'\u0625\u0639\u062F\u0627\u062F \u0641\u064A 5 \u062F\u0642\u0627\u0626\u0642' },

  'social.trust': { en:'Powering transport operations across 30+ countries', fr:'Au service des op\u00E9rations de transport dans plus de 30 pays', es:'Impulsando operaciones de transporte en m\u00E1s de 30 pa\u00EDses', ar:'\u064A\u062F\u0639\u0645 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0641\u064A \u0623\u0643\u062B\u0631 \u0645\u0646 30 \u062F\u0648\u0644\u0629' },

  'solution.label': { en:'ERP Platform', fr:'Plateforme ERP', es:'Plataforma ERP', ar:'\u0645\u0646\u0635\u0629 ERP' },
  'solution.title': { en:'Every module your transport<br>business needs', fr:'Tous les modules dont votre<br>entreprise de transport a besoin', es:'Todos los m\u00F3dulos que tu empresa<br>de transporte necesita', ar:'\u0643\u0644 \u0627\u0644\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C\u0647\u0627<br>\u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643' },
  'solution.desc': { en:'From fleet management and route planning to invoicing and HR \u2014 Virtus replaces scattered tools with one unified ERP designed for transport.', fr:'De la gestion de flotte et planification des itin\u00E9raires \u00E0 la facturation et aux RH \u2014 Virtus remplace les outils \u00E9parpill\u00E9s par un ERP unifi\u00E9 pour le transport.', es:'Desde gesti\u00F3n de flotas y planificaci\u00F3n de rutas hasta facturaci\u00F3n y RRHH \u2014 Virtus reemplaza herramientas dispersas con un ERP unificado para transporte.', ar:'\u0645\u0646 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0637\u0648\u0644 \u0648\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u2014 Virtus \u064A\u0633\u062A\u0628\u062F\u0644 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0631\u0642\u0629 \u0628\u0646\u0638\u0627\u0645 ERP \u0645\u0648\u062D\u062F.' },
  'solution.orders': { en:'Fleet Management', fr:'Gestion de flotte', es:'Gesti\u00F3n de flotas', ar:'\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0637\u0648\u0644' },
  'solution.orders.desc': { en:'Track vehicles, maintenance schedules, fuel costs, and fleet utilization in real time.', fr:'Suivez les v\u00E9hicules, la maintenance, les co\u00FBts de carburant et l\u2019utilisation de la flotte en temps r\u00E9el.', es:'Rastrea veh\u00EDculos, mantenimiento, costos de combustible y utilizaci\u00F3n de flota en tiempo real.', ar:'\u062A\u062A\u0628\u0639 \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0648\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0648\u062A\u0643\u0627\u0644\u064A\u0641 \u0627\u0644\u0648\u0642\u0648\u062F \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0633\u0637\u0648\u0644 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A.' },
  'solution.dispatch': { en:'Finance & Invoicing', fr:'Finance et facturation', es:'Finanzas y facturaci\u00F3n', ar:'\u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631' },
  'solution.dispatch.desc': { en:'Automate invoicing, track expenses, manage payroll, and generate financial reports instantly.', fr:'Automatisez la facturation, suivez les d\u00E9penses, g\u00E9rez la paie et g\u00E9n\u00E9rez des rapports financiers.', es:'Automatiza facturaci\u00F3n, rastrea gastos, gestiona n\u00F3mina y genera reportes financieros al instante.', ar:'\u0623\u062A\u0645\u062A\u0629 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0648\u062A\u062A\u0628\u0639 \u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0648\u0627\u062A\u0628 \u0648\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0641\u0648\u0631\u064B\u0627.' },
  'solution.drivers': { en:'HR & Drivers', fr:'RH et chauffeurs', es:'RRHH y conductores', ar:'\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0648\u0627\u0644\u0633\u0627\u0626\u0642\u0648\u0646' },
  'solution.drivers.desc': { en:'Manage driver contracts, licenses, schedules, and performance from one dashboard.', fr:'G\u00E9rez les contrats, permis, horaires et performances des chauffeurs depuis un seul tableau de bord.', es:'Gestiona contratos, licencias, horarios y rendimiento de conductores desde un panel.', ar:'\u0625\u062F\u0627\u0631\u0629 \u0639\u0642\u0648\u062F \u0627\u0644\u0633\u0627\u0626\u0642\u064A\u0646 \u0648\u0627\u0644\u0631\u062E\u0635 \u0648\u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0648\u0627\u0644\u0623\u062F\u0627\u0621 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0648\u0627\u062D\u062F\u0629.' },
  'solution.analytics': { en:'Analytics & BI', fr:'Analytique et BI', es:'An\u00E1lisis y BI', ar:'\u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0648\u0630\u0643\u0627\u0621 \u0627\u0644\u0623\u0639\u0645\u0627\u0644' },
  'solution.analytics.desc': { en:'Real-time dashboards for revenue, costs, fleet KPIs, and operational performance.', fr:'Tableaux de bord en temps r\u00E9el pour les revenus, co\u00FBts, KPI de flotte et performance op\u00E9rationnelle.', es:'Paneles en tiempo real para ingresos, costos, KPIs de flota y rendimiento operativo.', ar:'\u0644\u0648\u062D\u0627\u062A \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0641\u0648\u0631\u064A\u0629 \u0644\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641 \u0648\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u0633\u0637\u0648\u0644 \u0648\u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A.' },

  // Route optimization
  'routes.label': { en:'Route Planning', fr:'Planification des itin\u00E9raires', es:'Planificaci\u00F3n de rutas', ar:'\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A' },
  'routes.title': { en:'AI-optimized routes<br>for your entire fleet', fr:'Itin\u00E9raires optimis\u00E9s par IA<br>pour toute votre flotte', es:'Rutas optimizadas por IA<br>para toda tu flota', ar:'\u0645\u0633\u0627\u0631\u0627\u062A \u0645\u062D\u0633\u0646\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A<br>\u0644\u0623\u0633\u0637\u0648\u0644\u0643 \u0628\u0627\u0644\u0643\u0627\u0645\u0644' },
  'routes.desc': { en:'Our AI engine calculates the most efficient routes factoring in traffic, time windows, vehicle capacity, and driver schedules \u2014 cutting fuel costs and boosting on-time rates.', fr:'Notre moteur IA calcule les itin\u00E9raires les plus efficaces en tenant compte du trafic, des cr\u00E9neaux, de la capacit\u00E9 et des horaires des chauffeurs.', es:'Nuestro motor IA calcula las rutas m\u00E1s eficientes considerando tr\u00E1fico, ventanas horarias, capacidad y horarios de conductores.', ar:'\u0645\u062D\u0631\u0643 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u062D\u0633\u0628 \u0623\u0643\u062B\u0631 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0643\u0641\u0627\u0621\u0629 \u0645\u0639 \u0645\u0631\u0627\u0639\u0627\u0629 \u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0648\u0627\u0644\u0633\u0639\u0629 \u0648\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0633\u0627\u0626\u0642\u064A\u0646.' },
  'routes.explore': { en:'Explore route planning', fr:'Explorer la planification', es:'Explorar planificaci\u00F3n de rutas', ar:'\u0627\u0633\u062A\u0643\u0634\u0641 \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A' },

  // Live monitoring
  'monitor.label': { en:'Live Operations', fr:'Op\u00E9rations en direct', es:'Operaciones en vivo', ar:'\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629' },
  'monitor.title': { en:'Full visibility across<br>your entire operation', fr:'Visibilit\u00E9 compl\u00E8te sur<br>toutes vos op\u00E9rations', es:'Visibilidad total en<br>toda tu operaci\u00F3n', ar:'\u0631\u0624\u064A\u0629 \u0643\u0627\u0645\u0644\u0629 \u0639\u0628\u0631<br>\u062C\u0645\u064A\u0639 \u0639\u0645\u0644\u064A\u0627\u062A\u0643' },

  // Stats
  'stats.routes': { en:'Operational efficiency', fr:'Efficacit\u00E9 op\u00E9rationnelle', es:'Eficiencia operativa', ar:'\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629' },
  'stats.fuel': { en:'Cost reduction', fr:'R\u00E9duction des co\u00FBts', es:'Reducci\u00F3n de costos', ar:'\u062A\u062E\u0641\u064A\u0636 \u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641' },
  'stats.saved': { en:'Saved per week on admin', fr:'\u00C9conomis\u00E9es par semaine en admin', es:'Ahorradas por semana en admin', ar:'\u062A\u0648\u0641\u064A\u0631 \u0623\u0633\u0628\u0648\u0639\u064A \u0641\u064A \u0627\u0644\u0625\u062F\u0627\u0631\u0629' },
  'stats.ontime': { en:'On-time delivery rate', fr:'Taux de livraison \u00E0 l\u2019heure', es:'Tasa de entrega puntual', ar:'\u0645\u0639\u062F\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0641\u064A \u0627\u0644\u0648\u0642\u062A' },

  // FAQ
  'faq.title': { en:'Frequently asked questions', fr:'Questions fr\u00E9quemment pos\u00E9es', es:'Preguntas frecuentes', ar:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629' },

  // Final CTA
  'final.title': { en:'Ready to streamline your transport business?', fr:'Pr\u00EAt \u00E0 optimiser votre entreprise de transport ?', es:'\u00BFListo para optimizar tu empresa de transporte?', ar:'\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u062A\u0628\u0633\u064A\u0637 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643\u061F' },
  'final.desc': { en:'Join hundreds of transport companies running their entire operation on Virtus ERP.', fr:'Rejoignez des centaines d\u2019entreprises de transport qui g\u00E8rent toutes leurs op\u00E9rations sur Virtus ERP.', es:'\u00DAnete a cientos de empresas de transporte que gestionan toda su operaci\u00F3n con Virtus ERP.', ar:'\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0645\u0626\u0627\u062A \u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062A\u064A \u062A\u062F\u064A\u0631 \u062C\u0645\u064A\u0639 \u0639\u0645\u0644\u064A\u0627\u062A\u0647\u0627 \u0639\u0644\u0649 Virtus ERP.' },

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
  'product.title': { en:'The complete ERP for<br>transport companies', fr:'L\u2019ERP complet pour<br>les entreprises de transport', es:'El ERP completo para<br>empresas de transporte', ar:'\u0646\u0638\u0627\u0645 ERP \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644<br>\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0642\u0644' },

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
