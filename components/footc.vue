<<template>
  <div class="footer">
   CassavaHQ {{year}}
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
.footer {
  padding: 20px 0;
  text-align: center;
}
</style>
