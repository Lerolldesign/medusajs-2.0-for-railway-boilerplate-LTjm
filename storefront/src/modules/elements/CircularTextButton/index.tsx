import { DragCloseMail } from "../mailmodal"

const CircularTextButton = () => {
  const text = "envoyer moi une demande"

  return (
    <>
      {/**  <div className={styles.circularTextContainer}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ transform: `rotate(${index * (360 / text.length)}deg)` }}
          >
            {char}
          </span>
        ))}
      </div> */}
      <DragCloseMail />
    </>
  )
}

export default CircularTextButton
