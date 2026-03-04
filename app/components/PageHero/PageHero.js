import styles from '../../inner.module.css';

export default function PageHero({ title }) {
    return (
        <section className={styles.pageHero}>
            <div className={styles.pageHeroInner}>
                <h1>{title}</h1>
            </div>
        </section>
    );
}
