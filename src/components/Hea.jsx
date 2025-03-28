import styles from "@/styles/Hea.module.css";

export const Hea = ({ href, className, children }) => {
  return (
    <div>
      <a
        href={href}
        className={`${styles.link}
      
      
      ${className}`}
      >
        {children}
      </a>
    </div>
  );
};
