<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex justify-end gap-4">
      <Button label="Descargar Plantilla" @click="downloadFile()" class="p-button-warning"/>
      <Button label="Cargar Plantilla" @click="uploadFile()"/>
    </div>
    <div class="box p-4">
      <DataTable :value="products" responsiveLayout="scroll" class="text-sm">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadDataMain",
  setup() {
    const products = [
      {
        code: "1000",
        name: "Product 1",
        category: "Category 1",
        quantity: 10,
      },
      {
        code: "1001",
        name: "Product 2",
        category: "Category 1",
        quantity: 20,
      }
    ]

    const uploadFile = () => {
      alert('En proceso')
    }

    const downloadFile = () => {
      window.open("/plantilla.xlsx", "_blank");
    }

    return {
      products,
      uploadFile,
      downloadFile
    }
  }
}
</script>

<style scoped>

</style>