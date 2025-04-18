const { getProjectMini } = require('./utils/scripts/sanity') // <-- attention chemin relatif
const siteUrl = 'https://kymou-asbl.vercel.app'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  exclude: ['/404', '/_not-found'],
  autoLastmod: true,

  additionalPaths: async (config) => {
    const paths = [
      { loc: '/', changefreq: 'monthly', priority: 1.0 },
      { loc: '/home', changefreq: 'monthly', priority: 0.9 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
      { loc: '/gallery', changefreq: 'monthly', priority: 0.7 },
      { loc: '/project', changefreq: 'monthly', priority: 0.7 },
    ];
    
    try {
      const projects = await getProjectMini();
      console.log(projects)
      const projectPaths = projects.map((project) => ({
        loc: `/project/${project.slug}`,
        lastmod: project._updatedAt,
        changefreq: 'monthly',
        priority: 0.6,
      }));
      console.log('## success creation of sitemap 4 project ##')
      return [...paths, ...projectPaths];
    } catch (err) {
      console.error('❌ Erreur lors du fetch des projets pour le sitemap:', err);
      return paths;
    }
  }
}
