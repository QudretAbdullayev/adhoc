import styles from './ComponentTitle.module.scss';

export default function ComponentTitle({
  label,
  title,
  as: Tag = 'h2',
  size = 'md',
  className = '',
}) {
  return (
    <div className={`${styles.root} ${className}`}>
      {label && <span className={styles.label}>{label}</span>}
      <Tag className={`${styles.title} ${styles[`title_${size}`] || ''}`}>{title}</Tag>
    </div>
  );
}
