// first sample: to generate an excel file using xlsx and download

const worksheet = xlsx.utils.json_to_sheet(array);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'excel-file.xlsx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

// second sample: to generate sitemap and download

const sitemapContent = _.map(blogs, blog => {
            const url = `${baseurl}/${_.lowerCase(blog.type)}/${blog.slug}`;
            const currentDate = blog.lastUpdatedOn ? blog.lastUpdatedOn : (blog.createdAt ? blog.createdAt : new Date().toISOString());
            return `<url>
            <loc>${url}</loc>
            <lastmod>${currentDate}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>`;
        }).join("");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemapContent}
            </urlset>
        `;

        const blob = new Blob([sitemap], {type: 'text/xml'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'sitemap-blogs.xml';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
