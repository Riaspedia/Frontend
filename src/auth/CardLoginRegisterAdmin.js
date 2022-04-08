import React from "react";

const CardLoginRegisterAdmin = () => {
  return (
    <div class="row  justify-content-center mt-5">
      <div class="card" style={{ width: "30rem" }}>
        <div class="card-header">
          <h6>Gabung bersama Rias Pedia dan Dapatkan.</h6>
        </div>
        <div class="card-body">
          <div class=" row justify-content-start">
            <div class="col-2">
              <img
                src="img/logo/vendor.png"
                width="50"
                height="50"
              ></img>
            </div>
            <div class="col-8">
              <p class="bold mb-0">Kemudahan Mencari Salon</p>
              <p>Dengan Rias Pedia, Anda dapat dengan mudah menemukan salon terdekat</p>
            </div>
          </div>
          <hr class="mt-0"/>
          <div class=" row justify-content-start">
            <div class="col-2">
              <img
                src="img/logo/service.png"
                width="50"
                height="50"
              ></img>
            </div>
            <div class="col-8">
              <p class="bold mb-0">Kemudahan Mencari Pelayanan Salon</p>
              <p>Dengan Rias Pedia, Anda dapat dengan mudah menemukan salon yang diinginkan</p>
            </div>
          </div>
          <hr class="mt-0"/>
          <div class=" row justify-content-start">
            <div class="col-2">
              <img
                src="img/logo/promotion.png"
                width="50"
                height="50"
              ></img>
            </div>
            <div class="col-8">
              <p class="bold mb-0">Kemudahan Mempromoskan Salon </p>
              <p>Dengan Rias Pedia, Anda dapat dengan mudah mempromosikan salon anda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoginRegisterAdmin;
