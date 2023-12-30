'use-strict';
{
    const $hdr_header = document.getElementById('hdr_header');
    $hdr_header.insertAdjacentHTML('afterbegin' , `
    <div id="header">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h1><a href="index.html">Shotaro Sports</a></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            volleyball
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="jtmave23.html">JTマーヴェラス・'23~'24</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            figureskate
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="zenja-figskate92.html">第92回全日本フィギアスケート選手権</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="prof.html">profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>`);
}

{
    const $hdr_footer = document.getElementById('hdr_footer');
    $hdr_footer.insertAdjacentHTML('afterbegin' , `
    <!-- footer -->
        <footer id="footer">
          <p>&copy;Shotaro Sports</p>
        </footer>`);
}
