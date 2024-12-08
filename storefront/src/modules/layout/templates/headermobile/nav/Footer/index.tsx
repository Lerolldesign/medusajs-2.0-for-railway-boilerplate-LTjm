import styles from './style.module.scss';

export default function index() {
  return (
    <div className="{`${styles.footer} z-50`}">
        <a>Awwwards</a>
        <a>Instagram</a>
        <a>Dribble</a>
        <a>LinkedIn</a>
    </div>
  )
}