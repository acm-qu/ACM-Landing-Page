import classes from "./styles.module.css"
import { useResponsive } from "../../hooks/use-responsive"


const OurProjects = () => {

  const { isMobile } = useResponsive()

  return (
    <section id='our-projects' className={`${classes.container} ${isMobile ? classes.mobile : ""}`}>
      <h2 className={classes.title}>Our Projects</h2>
      <p className={classes.description}>Check out some of the amazing projects our club members have made!</p>

    </section>
  )
}

export default OurProjects