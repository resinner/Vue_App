<template>
  <div :id="$style.app">
    <ApartmentsItem 
    :descr="apartment.descr"
    :price="apartment.price"
    :rating="apartment.rating"
    imgSrc="https://photoresources.wtatennis.com/photo-resources/2020/07/02/87020751-8eee-44fa-8105-f4057c1be863/Muchova_Hero-Smile.png?width=950"

    />
  </div>
</template>

<script>
import ApartmentsItem from "./components/apartment/ApartmentsItem";

export default {
  name: "App",
  components: {
    ApartmentsItem,
  },
  data() {
    return {
      apartment: {
        id: "5f05c9dad2c9bc0f773444bc",
        title: "Aut qui adipisci discinctio maiores molesstiae sit est inventore vero.",
        descr: "Роскошные апартаменты в скайндинавском стиле с панорамным видом на реку и бесплатным Wi-Fi.",
        price: 1250,
        rating: 4.5,
        location: {
          city: "Kherson",
        },
        owner: {
          name: "Ellen",
          phone: "115-355-5652",
          email: "Tracey.Morar86@hotmail.com",
        },
      },
    };
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
