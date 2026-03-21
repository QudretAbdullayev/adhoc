import BlogDetailPage from "@/modules/BlogDetailPage";
import { fetchCachedData } from "@/utils/httpService";
import { notFound } from 'next/navigation';

// export async function generateMetadata({ params }) {
//   const { locale } = await params;
//   const data = await fetchCachedData(``, locale);

//   if (!data) return;

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

//   return {
//     metadataBase: new URL(baseUrl),
//     title: data.seo_title,
//     description: data.seo_description,
//     openGraph: {
//       title: data.seo_title,
//       description: data.seo_description,
//       images: [data.feed_ogi],
//       url: `${baseUrl}${locale === "en" ? "" : locale}`,
//       type: 'website',
//       siteName: 'Adhoc',
//     },
//     alternates: {
//       canonical: `${baseUrl}${locale === "en" ? "" : locale}`,
//       languages: {
//         'x-default': baseUrl,
//         en: `${baseUrl}`,
//         az: `${baseUrl}az`,
//       },
//     },
//   };
// }

export default async function Page({ params }) {
  const { locale } = await params;

  // const feed = await fetchCachedData(``, locale);

  return <BlogDetailPage locale={locale} />;
}