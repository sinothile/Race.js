describe("Race", function () {
    describe("Given speed1 as 100,speed2 as 10,distance as 1000,sleep as 500,getup as 40", function () {
        it("should return The tortoise won the race. The hare is sleeping for 91 minutes.", function () {
            //Arrange
            let raceService = new Race;
            let speed1 = 100;
            let speed2 = 10;
            let distance = 1000;
            let sleep = 500;
            let getup = 40;
            //Act
            let actual = raceService.race(speed1, speed2, distance, sleep, getup);
            //Assert
            expect(actual).toBe("The tortoise won the race. The hare is sleeping for 91 minutes.")

        })

    })

    describe("Given speed1 as 100,speed2 as 10,distance as 1500,sleep as 500,getup as 100", function () {
        it("should return The hare and the tortoise tied. The hare is sleeping for 135 minutes.", function () {
            //Arrange
            let raceService = new Race;
            let speed1 = 100;
            let speed2 = 10;
            let distance = 1500;
            let sleep = 500;
            let getup = 100;
            //Act
            let actual = raceService.race(speed1, speed2, distance, sleep, getup);
            //Assert
            expect(actual).toBe("The hare and the tortoise tied. The hare is sleeping for 135 minutes.")

        })

    })

    describe("Given speed1 as 100,speed2 as 10,distance as 1200,sleep as 500,getup as 100", function () {
        it("should return The hare won the race. The hare is sleeping for 105 minutes.", function () {
            //Arrange
            let raceService = new Race;
            let speed1 = 100;
            let speed2 = 10;
            let distance = 1200;
            let sleep = 500;
            let getup = 100;
            //Act
            let actual = raceService.race(speed1, speed2, distance, sleep, getup);
            //Assert
            expect(actual).toBe("The hare won the race. The hare is sleeping for 105 minutes.")

        })

    })
})