import axios from 'axios'
export default {
  created() {
    this.getUsers()
  },
  data() {
    return {
      usersList: [],
      total: 0,
      pagesize: 3,
      pagenum: 1,
      searchText: ''
    }
  },
  methods: {
    getUsers(pagenum = 1, query = '') {
      axios
        .get('http://localhost:8888/api/private/v1/users', {
          params: {
            pagesize: 3,
            pagenum,
            query
          },
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          if (res.data.meta.status === 200) {
            console.log(res)
            this.usersList = res.data.data.users
            this.total = res.data.data.total
            this.pagenum = res.data.data.pagenum
          } else {
            this.$router.push('/login')
            localStorage.removeItem('token')
          }
        })
    },
    changePage(curPage) {
      this.getUsers(curPage)
    },
    search() {
      this.getUsers(this.pagenum, this.searchText)
    }
  }
}
