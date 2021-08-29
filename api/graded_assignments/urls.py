from django.urls import path
from api.views import GradedAssignmentListView, GradedAssignmentCreateView
#from .views import UserViewSet

urlpatterns = [
    path('', GradedAssignmentListView.as_view()),
    path('create/', GradedAssignmentCreateView.as_view())
]