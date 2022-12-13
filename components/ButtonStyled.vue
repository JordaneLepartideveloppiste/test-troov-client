<template>
    <button type="button"
            :class="['items-center', customClass]" @click="handleClick">
            <slot></slot>
    </button>
  </template>
  
  <script>
  
  export default {
    name: "ButtonStyled",
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'medium'
      },
    },
    computed: {
      customClass() {
  
        let return_class = "inline-flex font-medium rounded shadow-sm "
  
        switch (this.type) {
          case "primary":
            return_class += "border border-transparent text-white bg-blue-600 hover:bg-blue-700";
            break;
          case "default":
            return_class += "border border-gray-200 text-gray-600 bg-white hover:border-gray-500";
            break;
          case "success":
            return_class += "border border-transparent bg-green-600 text-white hover:bg-green-700";
            break;
          case "error":
            return_class += "border border-transparent bg-rose-600 text-white hover:bg-rose-700";
            break;
          case "warning":
            return_class += "border border-transparent bg-orange-600 text-white hover:bg-orange-700";
            break;
          default:
            return_class += "border border-transparent text-white bg-blue-600 hover:bg-blue-700";
            break;
        }
  
  
        if(this.size === "medium") {
          return_class += " text-sm "
        }
  
        if(this.size === "small") {
          return_class += " text-xs px-3 py-2 "
        }
  
        if(this.size === "mini") {
          return_class += " text-xs px-2 py-1 "
        }
  
        if(this.size === "large") {
          return_class += " text base px-6 py-3 "
        }
  
        return return_class
  
      },
    },
    methods: {
      handleClick(e) {
          this.$emit('click', e.target)
      }
    }
  }
  </script>
  