import { startTransition } from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import BatuImage from '../assets/batu.png'
import GuntingImage from '../assets/gunting.png'
import KertasImage from '../assets/kertas.png'

const GameMini = () => {

    class Start {
        constructor() {
            this.playerOption = ""
            this.winner = ""
            this.botOption = ""
        }

        get getbotOption(){
            return this.botOption;
        }

        set setbotOption(option){
            this.botOption = option;
        }

        get getplayerOption() {
            return this.playerOption;
        }
        
        set setplayerOption(option) {
            this.playerOption = option;
        }

        botbrain(){
            const option = ['✊', '✌','🖐']
            const bot = option[Math.floor(Math.random() * option.length)];

            const el = document.querySelectorAll(".gambarCom");

            el[bot].body.style.backgroundColor = "#00000";
            console.log(el);

            return bot;
        }
    }

    function pickOption(params) {
        const start = new Start();
        start.setplayerOption = params
        start.botOption = start.botbrain();
        
        console.log("pilihan kamu ", start.playerOption);
        console.log("pilihan bot ", start.botOption);
    }
    return(
        <Container>
            <Row>
                <Col className="border">
                    <Row>
                        <Col className="border player1"><b>PLAYER 1</b></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 d-flex justify-content-center"><Image src={BatuImage} alt=""  className="gambar" onClick={() => pickOption('✊')}/></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 d-flex justify-content-center"><Image src={GuntingImage} alt="" className="gambar" onClick={() => pickOption('✌')}/></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 d-flex justify-content-center"><Image src={KertasImage} alt="" className="gambar" onClick={() => pickOption('🖐')}/></Col>
                    </Row>
                </Col>
                <Col className="border versus"><b>VS</b></Col>
                <Col className="border">
                    <Row>
                        <Col className="border d-flex justify-content-center"><b>COM</b></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 d-flex justify-content-center"><Image src={BatuImage} alt="" className="gambarCom" id='✊'/></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 d-flex justify-content-center"><Image src={GuntingImage} alt="" className="gambarCom" id='✌'/></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 d-flex justify-content-center"><Image src={KertasImage} alt="" className="gambarCom" id='🖐'/></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default GameMini;