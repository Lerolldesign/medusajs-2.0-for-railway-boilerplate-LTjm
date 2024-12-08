"use client"
import Logo_brown from "@modules/layout/templates/logoBrown"

export default function Header() {
  {
    /** const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isActive) setIsActive(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]) */
  }

  return (
    <>
      <Logo_brown />
      {/**   <div className={styles.main}>
        <div className={styles.header}>
          <div className="flex gap-5 z-20">
            <div className="font-lune uppercase text-xl 2xl:text-2xl relative top-4 2xl:top-8 font-base text-lune hidden sm:block">
              Menu
            </div>
            <div
              onClick={() => {
                setIsActive(!isActive)
              }}
              className={styles.button}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>*/}

      {/**  <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence> */}
    </>
  )
}
