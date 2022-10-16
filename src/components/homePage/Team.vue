<template>
    <div class="team">
        <div class="container-fluid">
            <h3 class="text-center">Our Team</h3>  
            <div class="card-wrapper">
                <div class="card" style="width: 18rem;">
                    <img src="../../assets/images/team/team1.jpg" class="card-img-top rounded img-thumbnail" alt="Salem Tarek">
                    <div class="card-body">
                        <h5 class="card-title">Salem Tarek</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                    <ul class="list-unstyled social-links d-flex justify-content-center">
                        <li>
                            <a href="mailto:salemtarek224@gmail.com" target="_blank" title="Email"><i class="fa fa-envelope"></i></a>
                        </li>
                        <li>
                            <a href="https://wa.me/201093967431" target="_blank" title="Whatsapp"><i class="fab fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href="https://salem-tarek.netlify.app/" target="_blank" title="Website"><i class="fa fa-globe"></i></a>
                        </li>
                        <li>
                            <a href="tel:201093967431" target="_blank" title="telephone"><i class="fa fa-phone"></i></a>
                        </li>  
                    </ul>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../assets/images/team/team2.jpg" class="card-img-top rounded img-thumbnail" alt="Mohamed Khaled">
                    <div class="card-body">
                        <h5 class="card-title">Mohamed Khaled</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-unstyled social-links d-flex justify-content-center">
                        <li>
                            <a href="mailto:salemtarek224@gmail.com" target="_blank" title="Email"><i class="fa fa-envelope"></i></a>
                        </li>
                        <li>
                            <a href="https://wa.me/201093967431" target="_blank" title="Whatsapp"><i class="fab fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href="https://salem-tarek.netlify.app/" target="_blank" title="Website"><i class="fa fa-globe"></i></a>
                        </li>
                        <li>
                            <a href="tel:201093967431" target="_blank" title="telephone"><i class="fa fa-phone"></i></a>
                        </li>  
                    </ul>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../assets/images/team/team3.jpg" class="card-img-top rounded img-thumbnail" alt="Ahmed Sherif">
                    <div class="card-body">
                        <h5 class="card-title">Ahmed Sherif</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-unstyled social-links d-flex justify-content-center">
                        <li>
                            <a href="mailto:salemtarek224@gmail.com" target="_blank" title="Email"><i class="fa fa-envelope"></i></a>
                        </li>
                        <li>
                            <a href="https://wa.me/201093967431" target="_blank" title="Whatsapp"><i class="fab fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href="https://salem-tarek.netlify.app/" target="_blank" title="Website"><i class="fa fa-globe"></i></a>
                        </li>
                        <li>
                            <a href="tel:201093967431" target="_blank" title="telephone"><i class="fa fa-phone"></i></a>
                        </li>  
                    </ul>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../assets/images/team/team4.jpg" class="card-img-top rounded img-thumbnail" alt="Omar Salem">
                    <div class="card-body">
                        <h5 class="card-title">Omar Salem</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-unstyled social-links d-flex justify-content-center">
                        <li>
                            <a href="mailto:salemtarek224@gmail.com" target="_blank" title="Email"><i class="fa fa-envelope"></i></a>
                        </li>
                        <li>
                            <a href="https://wa.me/201093967431" target="_blank" title="Whatsapp"><i class="fab fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href="https://salem-tarek.netlify.app/" target="_blank" title="Website"><i class="fa fa-globe"></i></a>
                        </li>
                        <li>
                            <a href="tel:201093967431" target="_blank" title="telephone"><i class="fa fa-phone"></i></a>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Team"
}
</script>

<style lang="scss" scoped>
.team{
    margin:20px 0;
    h3 {
        color:#253444;
        margin: 15px 0;
    }
    .card-wrapper {
        display: flex;
        place-content: center;
        flex-wrap:wrap;
        gap: 20px;
        .card {
            img {
                height:400px;
                object-fit: cover;
            }
            .card-body {
                h5.card-title {
                    color: #28ca71;
                }
            }
            .social-links {
                li {
                    margin: 0 10px;
                    a {
                        color: #253444;
                        transition:0.2s;
                        i {
                            font-size:1.5rem;
                            transition:0.5s;
                        }
                        &:hover {
                            color: #28ca71;
                            i {
                                transform: translateY(-5px);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>