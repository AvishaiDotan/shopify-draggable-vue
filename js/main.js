const options = {
    template: `
          <vue-sortable :options="options" @sortable:sorted="sorted">

            <vue-draggable-container tag="ul" class="preview-site-view">
                <li class="item header1">
                    <div class="logo">
                        <img src="./wix.png" class="logo-img"/>
                        <p class="logo-txt">Best Site For Designing Your Site</p>
                    </div>

                    <nav class="header-nav">
                        <ul class="nav-list">
                            <li><p>Go To Here</p> </li>
                            <li><p>Go To There</p> </li>
                            <li><p>Go To Somewhere</p> </li>
                        </ul>
                    </nav>

                </li>
                <li class="item main">
                <section class="home-page">

                    <div class="img-container">
                        <img src="2.jpg" alt="background-img" />
                    </div>
                        <div class="display">

                            <div class="about">
                                <h3>In today's world of technology, Appsus manages three main activities</h3>
                                <p>Contact and Internet communication through the best email system available</p>
                                <p>Clear and easy-to-use notes management system</p>
                                <p>Bookstore for storing and managing your favorite books!</p> 
                                <nav>
                                    <router-link to="/mail"><p class="mail">Try Our Mail</p></router-link>
                                    <router-link to="/keep"><p class="keep">Try Our Keep</p></router-link>
                                    <a href="./miss-books/index.html"><p class="books">Try Our Books</p></a>
                                </nav>
                        </div>
                    </div>
                    </section>
                </li>
            </vue-draggable-container>

            <hr />

            <vue-draggable-container tag="ul" class="full-site-view">
                <li class="item">sortable-item3</li>
            </vue-draggable-container>

        </vue-sortable>
    `,
    methods: {
        sorted: function (e) {
            console.log(e);
        },
    },
    data() {
        return {
            options: {
                draggable: '.item',
                sortAnimation: {
                    duration: 200,
                    easingFunction: 'ease-in-out',
                },
                plugins: [Draggable.Plugins.SortAnimation],
            },
        };
    },
}

const app = Vue.createApp(options)
app.use(VueShopifyDraggable);

app.mount('#app')