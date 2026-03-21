import BlogPage from "@/modules/BlogPage";

export default async function Page({ searchParams }) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page) || 1);
  return <BlogPage page={currentPage} />;
}
