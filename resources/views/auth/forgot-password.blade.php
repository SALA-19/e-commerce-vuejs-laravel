<x-app-layout>

    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {{ __('Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.') }}
    </div>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form action="{{ route('password.email') }}" method="post" class="w-[400px] mx-auto p-6 my-16">
        @csrf
        <h2 class="text-2xl font-semibold text-center mb-5">
          Enter your Email to reset password 
        </h2>
        <p class="text-center text-gray-500 mb-6">
          or
          <a
            href="{{ route('login') }}"
            class="text-purple-600 hover:text-purple-500"
            >login with existing account</a
          >
        </p>

        <div class="mb-3">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input
                id="loginEmail"
                type="email"
                name="email"
                :value="old('email')"
                required 
                autofocus
                placeholder="Your email address"
                class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>
        <button
          class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full"
        >
          Submit
        </button>
    </form>

</x-app-layout>
