<template>
  <div
    class="header__main lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[40px]"
  >
    <div class="header__main-logo" @click="$router.push('/')">
      <img
        class="header__logo active:opacity-50 cursor-pointer duration-200"
        src="@/assets/icons/logo__image.svg"
        alt="logo__image"
      />
      <img
        class="header__second-logo active:opacity-50 cursor-pointer duration-200"
        src="@/assets/icons/logo__second-image.svg"
        alt="logo__image"
      />
    </div>
    <nav class="header__navbar">
      <ul
        class="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-3"
      >
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer font-medium"
        >
          <img src="@/assets/icons/home.svg" alt="" />
          <a class="w-full" href="#">Bosh sahifa</a>
        </li>
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer font-medium"
        >
          <img src="@/assets/icons/about.svg" alt="" />
          <a class="w-full" href="#wasyt">Mahsulot haqida</a>
        </li>
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer font-medium"
        >
          <img src="@/assets/icons/demo.svg" alt="" />
          <a class="w-full" href="#application">Namoyish</a>
        </li>
        <li
          class="header__lists lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[14px] bg-white text-dark-cyan active:bg-blue active:text-white lg:px-[10px] lg:py-[10px] border-[1px] border-[#F5F5F7] rounded-[85px] duration-200 cursor-pointer font-medium"
        >
          <img src="@/assets/icons/partnership.svg" alt="" />
          <a class="w-full" href="#partnership">Hamkorlik</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.header__logo {
  vertical-align: middle;
}
.header__second-logo {
  display: none;
  vertical-align: middle;
}
.header__lists {
  font-family: "TT Interfaces" !important;
}
@media (max-width: 1250px) {
  .header__main {
    display: flex;
    gap: 20px;
  }
  .header__navbar {
    display: block;
  }
}
@media (max-width: 1101px) {
  .header__navbar {
    display: none;
  }
}
</style>
