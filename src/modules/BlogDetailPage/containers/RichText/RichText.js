import styles from "./RichText.module.scss";

// ─── BLOCK RENDERERS ──────────────────────────────────────────────────────────

function Heading({ block }) {
  const Tag = block.type; // h1 | h2 | h3
  return (
    <Tag
      id={block.id}
      className={styles[block.type]}
    >
      {block.text}
    </Tag>
  );
}

function Paragraph({ html }) {
  return (
    <p
      className={styles.p}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Blockquote({ html }) {
  return (
    <blockquote className={styles.blockquote}>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </blockquote>
  );
}

function HorizontalRule() {
  return <hr className={styles.hr} />;
}

function UnorderedList({ items }) {
  return (
    <ul className={styles.ul}>
      {items.map((item, i) => (
        <li
          key={i}
          className={styles.li}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  );
}

function OrderedList({ items }) {
  return (
    <ol className={styles.ol}>
      {items.map((item, i) => (
        <li
          key={i}
          className={styles.li}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ol>
  );
}

function Table({ head, rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {head.map((cell, i) => (
              <th key={i} className={styles.th}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={styles.tr}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={styles.td}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlockImage({ src, alt, caption }) {
  return (
    <figure className={styles.figure}>
      <img src={src} alt={alt} className={styles.figureImg} loading="lazy" />
      {caption && <figcaption className={styles.figcaption}>{caption}</figcaption>}
    </figure>
  );
}

// ─── MAIN RENDERER ────────────────────────────────────────────────────────────

export default function RichText({ blocks }) {
  return (
    <div className={styles.root}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h1":
          case "h2":
          case "h3":
            return <Heading key={i} block={block} />;
          case "p":
            return <Paragraph key={i} html={block.html} />;
          case "blockquote":
            return <Blockquote key={i} html={block.html} />;
          case "hr":
            return <HorizontalRule key={i} />;
          case "ul":
            return <UnorderedList key={i} items={block.items} />;
          case "ol":
            return <OrderedList key={i} items={block.items} />;
          case "table":
            return <Table key={i} head={block.head} rows={block.rows} />;
          case "image":
            return <BlockImage key={i} src={block.src} alt={block.alt} caption={block.caption} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
