import Grid from "@material-ui/core/Grid";
import Blurp from './LEGACYBlurp'
import style from '../../styles/Section.module.sass'

export default function Section(props) {

  return (
      <Grid id={(props.display.header).replace(/\s/g,'')} className={style.group} container direction='column' alignItems="center">
        <Grid item>
          <h1>{props.display.header} other</h1>
        </Grid>
        {props.display['blurps'].map( (element,index) => {
            return(<Grid key={index} className={style.text} item><Blurp key={index} display={element}></Blurp></Grid>)
        })}
    </Grid>
  )
}