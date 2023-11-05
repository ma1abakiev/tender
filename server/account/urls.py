from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

from .views import UserView, UserLoginAPIView, UserLogoutAPIView, UserRegistrationAPIView, ComplaintView, SubscriberNewsletterView

router = routers.DefaultRouter()
router.register('', UserView, basename='user')
router.register(r'complaint/', ComplaintView, basename='complaint')
router.register(r'subscribe-newsletter/', SubscriberNewsletterView, basename='user')

urlpatterns = [
    path("register/", UserRegistrationAPIView.as_view(), name="create-user"),
    path("login/", UserLoginAPIView.as_view(), name="login-user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
    path('', include(router.urls))
]
