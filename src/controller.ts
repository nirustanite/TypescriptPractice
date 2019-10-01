import {Controller, Get} from 'routing-controllers'

@Controller()
export default class MainCOntroller{
    @Get("/hello")
    
    main(){
        return {
            hello: 'World'
        }
    }
}