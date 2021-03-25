1. Token
    - Construct: header, payload, signature
    - Access token
        - Login
        - Recept { access token, refresh token, expires }
        - If logout but access token not running time. get access token to blacklist
    - Refresh
        - Check when almost to running time, use refresh token to get new token
        - if logout just need remove refresh token
        - Save in database
    - If token in cookies it managed by Server, if token in local storage it managed by Client
2. React class component
    - props nhận ở constructor
    - props.childrent
    - khởi tạo state ở constructor
    - render jsx ở hàm render
    - life circle: mounting(componentDidMount), updating(ComponentDidUpdate), unmounting (ComponentWillUnmount)
    - API context
    - HOC component
    - props render
    - ...
3. Hooks

    - useState()
    - useEffect()
    - useDispatch()
    - useSelector()
    - useRef()
    - UseContext()
      ....

4. Redux
    - actions: object
    - actions creator: function
    - constants
    - reducers
    - stores
    - middlewares
        - redux thunk
        - redux saga
5. Tại sao lại cần redux
    - Khi cần truyền dữ liệu giữa các page khác nhau thì rất khó hoặc truyền dữ liệu giữa thằng ông nội và thằng cháu thì phải thông qua thằng cha
    - Khi sử dụng redux ta chỉ quan tâm quản lý dữ liệu trên store như thế nào.
6. Tại sao lại cần middleware

    - Bình thường khi ta dispatch thì redux chỉ cho ta dispatch một object. Nếu ta muốn dispatch một function thì phải dùng middleware.
    - Uầy vậy tại sao ta lại dispatch một function. Thông thường thì khi ta gọi một API chẳng hạn, thì nó là một side effect. Có nghĩa là ta không biết khi nào API chạy xong và trả dữ liệu cho chúng ta để ta dispatch data vào store. Vì vậy ta phải dispatch một function async để khi nào data chạy xong thì dispatch vào store. Uầy mông lung quá

7. Có 2 loại middleware sử dụng thông dụng là redux thunk và redux saga
    - Theo mình biết thì redux thunk sử dụng đơn giản dể hiểu, nếu tác vụ thông thường thì thằng redux thunk nó gần như đáp ứng được tất
    - Redux saga thì nó sử dụng level bro hơn, dễ test hơn và thường được sử dụng trong dự án lớn.
