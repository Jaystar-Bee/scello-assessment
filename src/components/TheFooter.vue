<template>
  <div
    class="
      bg-light-purple
      rounded-b-md
      flex
      items-center
      justify-end
      text-primary
      py-6
      px-8
    "
  >
    <div class="flex space-x-2 mr-10 items-center">
      <p>Row per page:</p>
      <select name="pageNum" id="page" class="bg-transparent">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
    <div class="mr-10">
      <p>1-10 of 200</p>
    </div>
    <div class="flex items-center space-x-8">
      <img src="./../assets/img/arrow-left.png" alt="" />
      <img src="./../assets/img/arrow-right.png" alt="" />
    </div>
  </div>
</template>