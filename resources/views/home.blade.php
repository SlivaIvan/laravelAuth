@extends('layouts.app')

@section('content')
    <div class="container">
        <div id="user-info"></div>
    </div>
@endsection

@push('scripts')
    <script src="{{ mix('/js/app.js') }}"></script>
@endpush
<form method="POST" action="{{ route('logout') }}">
    @csrf
    <button type="submit">Выйти</button>
</form>

