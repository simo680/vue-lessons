<template>
  <div class="wrapper">
    <h2>About me</h2>
    <div class="text">
      <div class="padd">
        <p>
          Hi, I'm Alex - web developer from Karaganda. <br />
          I'm interested in development and eveything connected with it
        </p>
      </div>
      <div class="padd">
        <p>
          Ready to implement excelent projects <br />
          with wonderful people
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.space {
  word-wrap: break-word;
}
.wrapper {
  background-color: #f6f6f6;
  padding: 100px;
}

h2 {
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.padd {
  padding-bottom: 30px;
}
.text {
  text-align: center;
}


@media (max-width: 430px) {
  .wrapper {
    padding: 60px;
  }
}

</style>
