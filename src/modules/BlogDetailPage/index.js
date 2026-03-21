import styles from "./BlogDetailPage.module.scss";
import { POST } from "./data/blogData";
import PostHeader from "./containers/PostHeader/PostHeader";
import TableOfContents from "./containers/TableOfContents/TableOfContents";
import RichText from "./containers/RichText/RichText";
import PostSidebar from "./containers/PostSidebar/PostSidebar";

export default function BlogDetailPage() {
  return (
    <section className={styles.section}>
      <article className={`${styles.article} g-container`}>

        {/* ── Header — category, date, title, lead, cover ── */}
        <PostHeader
          category={POST.category}
          date={POST.date}
          title={POST.title}
          lead={POST.lead}
          coverImage={POST.coverImage}
        />

        {/* ── Body — TOC left | content center | sidebar right ── */}
        <div className={styles.body}>

          {/* Left: Table of Contents (order 1) */}
          <TableOfContents items={POST.toc} />

          {/* Center: Rich text content (order 2) */}
          <main className={styles.main}>
            <RichText blocks={POST.content} />
          </main>

          {/* Right: Share + Author + Related (order 3) */}
          <PostSidebar
            author={POST.author}
            related={POST.related}
            title={POST.title}
            slug="building-digital-products-that-last"
          />

        </div>
      </article>
    </section>
  );
}
