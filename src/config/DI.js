import DIContainer, { object, use, factory, func, IDIContainer } from "rsdi";
import sequelize from "./db";


const configureDI = () => {

    const container = new DIContainer();
    
    container.add({
        Sequelize: sequelize,

        Car: object(Car).construct( use('Sequelize') ),
        CarRepository: object(CarRepository).construct( use('Car') ),
        CarService: object(CarService).construct( use('CarRepository') ),
        CarController: object(CarController).construct( use('CarService') ),
    });

    return container;
}


export default configureDI;