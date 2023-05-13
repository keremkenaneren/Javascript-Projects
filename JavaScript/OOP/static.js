//! STATİC

class Math {
    static topla(a, b) {
        console.log(a + b);;
    }

    cikar(a, b) {
        console.log(a - b);
    }
}

//! static değilse nesne üzerinden
//! static ise class üzerinden erişiyoruz

const math = new Math();

math.cikar(3, 1); // erişebiliyoruz çünkü static değil

// math.topla(3, 3); // erişemeyiz çünkü static 

Math.topla(3, 3); //? class üzerinden erişmemiz lazım

