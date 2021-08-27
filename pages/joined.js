import React from 'react'
import Title from '../Componets/Title/Title'
import Container from '../Containers/Container'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import JoinedWrapper from '../Wrappers/JoinedWrapper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


const Joined = () => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedJ: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const classes = useStyles();
    return (
        <Container>
            <JoinedWrapper>
                <div className="px-5">
                    <div className="py-5">
                        <Title>
                            Отопление жилых зданий | Консультационная поддержка Viessmann
                        </Title>
                    </div>
                    <div className="row py-5 justify-content-center">
                        <div className="col-12 col-md-8 col-xl-7">
                            <FormControl>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={state.checkedB} onChange={handleChange}
                                                name="checkedB"
                                                color="primary" />}
                                        label="Я хочу получить бесплатную консультационную поддержку " />
                                </FormGroup>
                                <RadioGroup>
                                    <div className="my-2 p-2 py-3 border mb-4 w-100 shadow rounded-3 d-flex flex-wrap position-relative">
                                        <div className="position-absolute left-0 joined_title">
                                            Пожалуйста, укажите суть Вашего обращения
                                        </div>
                                        <FormControlLabel value="Технический вопрос" control={<Radio color="primary" />} label="Технический вопрос" />
                                        <FormControlLabel value="Покупка оборудования" control={<Radio color="primary" />} label="Покупка оборудования" />
                                        <FormControlLabel value="Сервисные услуги" control={<Radio color="primary" />} label="Сервисные услуги" />
                                        <FormControlLabel value="Другое" control={<Radio color="primary" />} label="Другое" />
                                    </div>
                                </RadioGroup>
                                <RadioGroup>
                                    <div className="my-2 p-2 py-3 border w-100 mb-4 shadow rounded-3 d-flex flex-wrap position-relative">
                                        <div className="position-absolute left-0 joined_title">
                                            Пожалуйста, укажите суть Вашего обращения
                                        </div>
                                        <FormControlLabel value="Строительство нового здания" control={<Radio color="primary" />} label="Строительство нового здания" />
                                        <FormControlLabel value="Модернизация, реконструкция здания" control={<Radio color="primary" />} label="Модернизация, реконструкция здания" />
                                    </div>
                                </RadioGroup>

                                <FormGroup>
                                    <div className="my-2 p-2 py-3 border w-100 mb-4 shadow rounded-3 d-flex flex-wrap position-relative">
                                        <div className="position-absolute left-0 joined_title">
                                            Выберите тип оборудования
                                        </div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={state.checkedA} onChange={handleChange}
                                                    name="checkedA"
                                                    color="primary" />}
                                            label="Product 1" />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={state.checkedF} onChange={handleChange}
                                                    name="checkedF"
                                                    color="primary" />}
                                            label="Product 2" />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={state.checkedG} onChange={handleChange}
                                                    name="checkedG"
                                                    color="primary" />}
                                            label="Product 3" />
                                    </div>
                                </FormGroup>
                            </FormControl>
                            <form className={classes.root} noValidate autoComplete="off">
                                <div className="my-2 p-2 py-3 border w-100 mb-4 shadow rounded-3 d-flex flex-wrap position-relative">
                                    <div className="position-absolute left-0 joined_title">
                                        Выберите тип оборудования
                                    </div>
                                    <div className="row w-100 m-0">
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 p-2 py-3 border w-100 mb-4 shadow rounded-3 d-flex flex-wrap position-relative">
                                    <div className="row w-100 m-0">
                                        <div className="col-12">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-12 mt-2">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={state.checkedH} onChange={handleChange}
                                                        name="checkedH"
                                                        color="primary" />}
                                                label="У меня есть договор сервисного обслуживания со специализированной фирмой" />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 p-2 py-3 border w-100 mb-4 shadow rounded-3 d-flex flex-wrap position-relative">
                                    <div className="row w-100">
                                        <div className="col-12">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 p-2 py-3 border w-100 mb-4 shadow rounded-3 d-flex flex-wrap position-relative">
                                    <div className="row w-100">
                                        <div className="col-12">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-md-6">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 p-2 py-3 border w-100 mb-4 shadow rounded-3 d-flex flex-wrap position-relative">
                                    <div className="row w-100">
                                        <div className="col-12 py-3">
                                            <TextField id="standard-basic" label="Standard" />
                                        </div>
                                        <div className="col-12 mt-2">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={state.checkedJ} onChange={handleChange}
                                                        name="checkedJ"
                                                        color="primary" />}
                                                label="У меня есть договор сервисного обслуживания со специализированной фирмой" />
                                        </div>
                                        <div className="col-12">
                                            <p>Ваши персональные данные используются нами только согласно нашему заявлению о защите данных. *</p>
                                            <p>
                                                Ваш номер телефона и, если указан, адрес электронной почты будут использованы фирмой Viessmann или уполномоченной фирмой Viessmann третьей стороной только для связи с вами с целью решения вопросов, касающихся запрошенной консультационной поддержки.
                                            </p>
                                            <div className="text-center">
                                                <button className="btn btn-danger">Отправить</button>
                                            </div>
                                            <h4 className="fw-bold">Примечание</h4>
                                            <p>Уведомление об отмене запроса должно быть направлено на электронную почту info@viessmann.uz</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </JoinedWrapper>
        </Container>
    )
}

export default Joined
